var webpack = require('webpack');
var path = require('path');
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
    ] : []
};
