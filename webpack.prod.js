const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(common, {
    mode:'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
            use:ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader','postcss-loader','sass-loader']
            })
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new ExtractTextPlugin("css/[name].css"),
        new optimizeCss({
            assetNameRegExp: /\.style\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
    ],
    optimization: {
        // minimize: true,
        minimizer: [new optimizeCss({})],

    }
});