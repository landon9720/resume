const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './frontend.jsx',
  output: {
    filename: './frontend.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [   
    new CopyWebpackPlugin([
      { from: './index.html', to: 'index.html' },
      { from: './data.json', to: 'data.json' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  devtool: 'inline-cheap-source-map',
}
