import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/configTypes";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const {paths} = options
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename:'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    })
  ]
}
