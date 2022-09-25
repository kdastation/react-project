import webpack from "webpack";
import {BuildOptions} from "./types/configTypes";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const {isDev} = options
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (path: string) => Boolean(path.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typeScriptLoader,
    cssLoaders
  ]
}
