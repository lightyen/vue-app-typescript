import Webpack from "webpack"
import path from "path"

// Plugins
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import WebpackBarPlugin from "webpackbar"
import { VueLoaderPlugin } from "vue-loader"
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin"
const DelWebpackPlugin = require("del-webpack-plugin")
import CleanWebpackPlugin from "clean-webpack-plugin"

// Other
import { name as AppName } from "../package.json"

const entry: Webpack.Entry = {
    index: "./src/index.ts",
    404: "./src/404.ts",
}

/** 一些自定義的設定 */
interface IOptions {
    /** 輸出位置 */
    dist?: string
    /** 程式進入點位置 */
    src?: string
    /** 第三方程式庫位置 */
    vendor?: string
}

export function getBaseConfig(options?: IOptions): Webpack.Configuration {
    const distDefaultPath = path.resolve(__dirname, "..", "dist")
    const srcDefaultPath = path.resolve(__dirname, "..", "src")
    if (!options) {
        options = {
            dist: distDefaultPath,
            src: srcDefaultPath,
            vendor: "",
        }
    } else {
        if (!options.dist) {
            options.dist = distDefaultPath
        }
        if (!options.src) {
            options.src = srcDefaultPath
        }
    }

    const plugins: Webpack.Plugin[] = [
        new VueLoaderPlugin(),
        new WebpackBarPlugin({ profile: true }),
        new DelWebpackPlugin({
            include: ["*.*"],
            exclude: options.vendor ? ["dll.js", "manifest.json"] : [],
            info: true,
            keepGeneratedAssets: true,
            allowExternal: false,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
    ].concat(
        Object.keys(entry).map((name: string) => {
            const exclude = Object.keys(entry).slice()
            exclude.splice(Object.keys(entry).indexOf(name), 1)
            return new HtmlWebpackPlugin({
                filename: name + ".html",
                excludeChunks: exclude,
                minify: false,
                inject: false, // NOTE: 手動注入
                template: path.join(options.src, "template", name + ".ejs"),
                favicon: path.join(options.src, "assets", "images", "favicon.ico"),
                dll: options.vendor ? '<script type="text/javascript" src="/dll.js"></script>' : "",
                development:
                    process.env.NODE_ENV !== "production" ? '<div id="this-is-for-development-node"></div>' : "",
            })
        }),
    )

    const conf: Webpack.Configuration = {
        entry,
        output: {
            path: options.dist,
            filename: "[name].[hash].js",
            publicPath: "/",
        },
        target: "web",
        resolveLoader: {
            modules: ["node_modules"],
        },
        module: {
            rules: [
                {
                    test: /.vue$/,
                    loader: "vue-loader",
                    options: {
                        extractCSS: true,
                        loaders: {
                            scss: [
                                "vue-style-loader",
                                MiniCssExtractPlugin.loader,
                                "css-loader?sourceMap",
                                "sass-loader?sourceMap",
                            ],
                            css: ["vue-style-loader", MiniCssExtractPlugin.loader, "css-loader?sourceMap"],
                        },
                    },
                },
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        appendTsxSuffixTo: [/\.vue$/],
                        silent: true,
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jp(e?)g|gif|svg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: { name: "assets/images/[name].[ext]" },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: { name: "assets/fonts/[name].[ext]?[hash]" },
                        },
                        {
                            loader: "url-loader",
                            query: { name: "assets/fonts/[name].[ext]" },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        process.env.NODE_ENV !== "production" ? "vue-style-loader" : MiniCssExtractPlugin.loader,
                        { loader: "css-loader" },
                        {
                            loader: "postcss-loader",
                            options: { config: { path: ".config/" } },
                        },
                    ],
                },
                {
                    test: /\.less$/,
                    use: [
                        process.env.NODE_ENV !== "production" ? "vue-style-loader" : MiniCssExtractPlugin.loader,
                        { loader: "css-loader" },
                        {
                            loader: "postcss-loader",
                            options: { config: { path: ".config/" } },
                        },
                        {
                            loader: "less-loader",
                            options: {
                                javascriptEnabled: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        process.env.NODE_ENV !== "production" ? "vue-style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                camelCase: true,
                                localIdentName: "[local]-[hash:base64:6]",
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: { config: { path: ".config/" } },
                        },
                        { loader: "sass-loader" },
                    ],
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".js", ".vue"],
            plugins: [
                new TsconfigPathsPlugin({
                    configFile: "tsconfig.json",
                }),
            ],
            alias: {
                vue$: "vue/dist/vue.runtime.min.js",
            },
        },
        plugins,
    }

    return conf
}
