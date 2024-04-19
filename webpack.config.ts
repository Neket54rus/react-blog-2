import path from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildOptions, BuildOptionsPaths } from './config/build/types/config'

const configOptionsPaths: BuildOptionsPaths = {
	build: path.resolve(__dirname, 'dist'),
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	html: path.resolve(__dirname, 'public', 'index.html')
}

export default (env: BuildEnv) => {
	const mode = env?.mode || 'development'
	const port = env?.port || '3000'

	const isDev = mode === 'development'

	const configOptions: BuildOptions = {
		mode,
		paths: configOptionsPaths,
		isDev,
		port
	}

	const config = buildWebpackConfig(configOptions)

	return config
}