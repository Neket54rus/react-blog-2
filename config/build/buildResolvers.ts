import webpack from 'webpack'

export const buildResolvers = (srcPath: string): webpack.ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [srcPath, 'node_modules'],
		alias: {
			'@': srcPath,
		},
		mainFiles: ['index'],
	}
}
