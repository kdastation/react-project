import webpack from 'webpack';
import { BuildOptions } from './types/configTypes';

export const buildResolvers = (
  options: BuildOptions,
): webpack.ResolveOptions => {
  const { paths } = options;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: false,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': options.paths.src,
    },
  };
};
