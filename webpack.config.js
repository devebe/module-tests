const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
        },
        {
            test: /\.xml$/i,
            use: ['xml-loader'],
        },
    ],
  },
  plugins: [
    new htmlWebPackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'head',
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};