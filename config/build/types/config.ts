type BuildOptionsMode = 'production' | 'development'

export interface BuildOptionsPaths {
	entry: string
	build: string
	html: string
}

export interface BuildOptions {
	mode: BuildOptionsMode
	paths: BuildOptionsPaths
	isDev: boolean
}