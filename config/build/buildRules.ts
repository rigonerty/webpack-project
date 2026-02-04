import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BuilldOptions } from "./types/config";

export function buildRules({isDev}:BuilldOptions): webpack.RuleSetRule[]{

    const typeScriptLoader = 
    {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
    };
    const styleScssLoader =
    {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                        namedExport: false,
                    },
                }
            },
            'sass-loader',               
        ],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    return [
        fileLoader,
        svgLoader,
        typeScriptLoader,
        styleScssLoader,
        ]
}