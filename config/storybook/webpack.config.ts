import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildPaths } from '../build/types/configTypes';
import { cssLoader } from '../build/loaders/cssLoader';
import { svgLoaders } from '../build/loaders/svgLoader';

// TODO: Отрефакторить
export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }
    return rule;
  });
  config!.module!.rules!.push(svgLoaders());
  config!.module!.rules!.push(cssLoader(true));
  config!.plugins!.push(new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }));

  return config;
};
