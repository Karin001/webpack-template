const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackReloadPlugin = require('html-webpack-reload-plugin');
const webpack = require('webpack');
module.exports = merge(common, {
    mode:'development',
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackReloadPlugin()
    ]
});