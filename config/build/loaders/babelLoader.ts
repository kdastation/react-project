import babelRemoveAttributesPlugin from '../../babel/plugins/babelRemoveAttributesPlugin';
import { BuildOptions } from '../types/configTypes';

type BabelLoader = {
  isTsx: boolean
} & BuildOptions

export const babelLoader = ({ isTsx, isDev }: BabelLoader) => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-typescript', { isTsx }],
        '@babel/plugin-transform-runtime',
        isTsx && !isDev && [babelRemoveAttributesPlugin, { attributes: ['data-testid'] }],
        isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
});
