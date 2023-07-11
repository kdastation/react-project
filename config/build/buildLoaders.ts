import webpack from 'webpack';
import { BuildOptions } from './types/configTypes';
import { cssLoader } from './loaders/cssLoader';
import { svgLoaders } from './loaders/svgLoader';
import { babelLoader } from './loaders/babelLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const codeBabelLoader = babelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = babelLoader({ ...options, isTsx: true });

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

  return [
    cssLoaders,
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
  ];
};
