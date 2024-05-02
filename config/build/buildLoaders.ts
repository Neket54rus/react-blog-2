import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: ['file-loader'],
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (path: string) => Boolean(path.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [fileLoader, svgLoader, typescriptLoader, sassLoader]
}
