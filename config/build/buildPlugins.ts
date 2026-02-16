import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack, { DefinePlugin } from "webpack";
import { BuildPaths } from "./types/config";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"

export function buildPlugins({html}:BuildPaths, isDev: boolean): webpack.WebpackPluginInstance[]{
    return [
        new HtmlWebpackPlugin({template: html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        (isDev && new ReactRefreshWebpackPlugin())
    ];
}