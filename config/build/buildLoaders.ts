import webpack from 'webpack';
import { BuildOptions } from './types/configTypes';
import { cssLoader } from './loaders/cssLoader';
import { svgLoaders } from './loaders/svgLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const babelLoader = {
    test: /\.{js|jsx|tsx}$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const svgLoader = svgLoaders();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoaders = cssLoader(isDev);

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    babelLoader,
    typeScriptLoader,
    cssLoaders,
    fileLoader,
    svgLoader,
  ];
};
