var webpack = require('webpack');
module.exports = {
    entry: './client/client.js',
    output: {
        path: 'public/build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
        ]
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : []
};
