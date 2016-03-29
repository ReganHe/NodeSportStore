/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
var path = require('path');

module.exports = {
    entry: [
        "./views/entry.js"
    ],
    output: {
        path: path.join(__dirname, 'bin'),
        publicPath: './bin/',
        filename: "bundle.js"
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx", include: /views/}
        ]
    }
};