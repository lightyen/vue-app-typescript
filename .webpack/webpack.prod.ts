import webpackMerge from "webpack-merge"
import Webpack from "webpack"
import path from "path"
import os from "os"

process.env.NODE_ENV = "production"
import { getBaseConfig } from "./webpack.common"

export default webpackMerge(getBaseConfig(), {
    performance: {
        hints: "warning",
        assetFilter: (filename: string) => {
            return filename.endsWith(".css") || filename.endsWith(".js")
        },
    },
    mode: "production",
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                default: false,
                common: false,
                styles: {
                    name: "app",
                    test: /\.(s?css|vue)$/, // chunks plugin has to be aware of all kind of files able to output css in order to put them together chunks: 'initial', minChunks: 1, enforce: true
                },
            },
        },
    },
    plugins: [new Webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /es|zh/)],
})
