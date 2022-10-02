import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/configTypes';
import { cssLoader } from '../build/loaders/cssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push(cssLoader(true));

  return config;
};
