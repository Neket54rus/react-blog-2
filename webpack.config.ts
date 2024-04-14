import path from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildOptions, BuildOptionsPaths } from './config/build/types/config'

const configOptionsPaths: BuildOptionsPaths = {
	build: path.resolve(__dirname, 'dist'),
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development'

const configOptions: BuildOptions = {
	mode,
	paths: configOptionsPaths,
	isDev 
}

const config = buildWebpackConfig(configOptions)

export default config