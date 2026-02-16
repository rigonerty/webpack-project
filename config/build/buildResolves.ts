import webpack from "webpack";
import { BuilldOptions } from "./types/config";

export function buildResolves(options: BuilldOptions): webpack.ResolveOptions{
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        alias: {
            "@src/*": options.paths.src + "/*", // maps @something to path/to/something
        },
        mainFiles: ["index"],
        
    }
}