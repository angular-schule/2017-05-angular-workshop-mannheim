const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './app.ts',
    output: { filename: 'bundle.js' },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{ loader: "ts-loader" }]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ beautify: false, sourceMap: true })
    ]
}