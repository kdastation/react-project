import { BuildOptions } from '../types/configTypes';

type BabelLoader = {
  isTsx: boolean
} & BuildOptions

export const babelLoader = ({ isTsx }: BabelLoader) => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-typescript', { isTsx }],
        '@babel/plugin-transform-runtime',
      ],
    },
  },
});
