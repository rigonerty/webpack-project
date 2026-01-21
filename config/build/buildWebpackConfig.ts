import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { buildRules } from "./buildRules";
import { BuilldOptions } from "./types/config";
import webpack from "webpack"


export function buildWebpackConfig(options: BuilldOptions): webpack.Configuration{
    const {mode, paths, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        module:{
            rules: buildRules(options),
        },
        resolve:buildResolves(),
        plugins: buildPlugins(paths),
        devtool: isDev? "inline-source-map" : undefined,
        devServer: isDev? buildDevServer(options) : undefined
    }
}