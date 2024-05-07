import webpackDevServer from 'webpack-dev-server'

export const buildDevServer = (port: string): webpackDevServer.Configuration => {
    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}
