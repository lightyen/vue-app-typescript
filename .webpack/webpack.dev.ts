import Webpack from "webpack"
import webpackMerge from "webpack-merge"
import os from "os"

process.env.NODE_ENV = "development"
import { getBaseConfig } from "./webpack.common"

// NOTE: 可以選擇你要的 dist 位置
// const dist = path.resolve(os.homedir(), "Documents", "react-app-typescript", "dist")
// getBaseConfig({dist})

export default webpackMerge(getBaseConfig(), {
    performance: {
        hints: false,
        assetFilter: (filename: string) => {
            return filename.endsWith(".css") || filename.endsWith(".js")
        },
    },
    mode: "development",
    stats: "minimal",
    devtool: "#inline-source-map",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: ["node_modules"],
    },
})
