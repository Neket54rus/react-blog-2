type BuildOptionsMode = 'production' | 'development'

export interface BuildOptionsPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildOptions {
    mode: BuildOptionsMode
    paths: BuildOptionsPaths
    isDev: boolean
    port: string
}

export interface BuildEnv {
    mode?: BuildOptionsMode
    port?: string
}
