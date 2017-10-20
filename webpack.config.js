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
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css'],
        // modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
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
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]', // ./images/[hash].[ext]
                },
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader",
            },
        ],
    },
}
