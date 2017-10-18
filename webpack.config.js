const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './frontend.jsx',
    output: {
        filename: './frontend.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyWebpackPlugin([{ from: './index.html', to: 'index.html' }]),
    ],
    resolveLoader: {
        alias: {
            'autolinker-loader': path.join(__dirname, './autolinker-loader.js'),
        },
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(json)$/,
                exclude: /(node_modules)/,
                loader: ['json-loader', 'autolinker-loader'],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                        },
                    },
                ],
            },
        ],
    },
}
