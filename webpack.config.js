var webpack = require('webpack');
//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './client/client.js',
    output: {
        filename: './public/build/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
    //,
    //plugins: [
    //  new CommonsChunkPlugin('./public/build/init.js'),
    //  new OpenBrowserPlugin({ url: 'http://localhost:3003' })
    //]
};
