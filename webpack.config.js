var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './client/client.js',
    output: {
        filename: './public/build/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.md']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.md$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [
        new CommonsChunkPlugin('./public/build/init.js'),
        new OpenBrowserPlugin({url: 'http://localhost:3003'})
    ]
};
