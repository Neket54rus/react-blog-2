import webpack from 'webpack'

import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
	return {
		mode: options.mode,
		entry: options.paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: options.paths.build,
			clean: true,
		},
		plugins: buildPlugins(options.paths.html),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	}
}