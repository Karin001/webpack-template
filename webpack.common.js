const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
 const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        page1: './src/page-1/app.js',
        page2: './src/page-2/app.js'
    },
    output: {
        filename: 'js/[name]-[hash:5].js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    //     compress: true,
    //     hot: true
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'page-1.html',
            template: 'src/page-1/page-1.html',
            chunks: ['page1'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: 'page-2.html',
            template: 'src/page-2/page-2.html',
            chunks: ['page2'],
            inlineSource: '.(js|css)$'
        }),

        new CleanWebpackPlugin(['dist']),
        //new ExtractTextPlugin('main.css'),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),

    ],
    module: {
        rules: [
           
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets'
                        }
                    }
                ]
            }
        ]
    },
};