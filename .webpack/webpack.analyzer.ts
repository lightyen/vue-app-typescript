import webpackMerge from "webpack-merge"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

process.env.NODE_ENV = "production"
import baseWebpackConfig from "./webpack.prod"

export default webpackMerge(baseWebpackConfig, {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "server",
            analyzerHost: "127.0.0.1",
            analyzerPort: 0,
            reportFilename: "report.html",
            defaultSizes: "parsed",
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: "stats.json",
            statsOptions: null,
            logLevel: "info",
        }),
    ],
})
