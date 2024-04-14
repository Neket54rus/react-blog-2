import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export const buildPlugins = (htmlPath: string): webpack.WebpackPluginInstance[] => {
	return [
		new HtmlWebpackPlugin({
 			template: htmlPath,
		}),
		new webpack.ProgressPlugin(),
	]
}