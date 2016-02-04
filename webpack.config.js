var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,
    displayErrorDetails: true,
    context: __dirname,
    entry: [
        //'webpack/hot/dev-server',
        //'webpack-dev-server/client?http://localhost:3000',
        './app/run.js'
    ],
    output: {
        path: __dirname + "/build",
        pathinfo: true,
        filename: "scripts/app.bundle.js"
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin("styles/style.css"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'test-environment',
            template: "./app/index.jade",
            inject: false,
            hash: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: "babel",
                include: [path.resolve(__dirname, "app")],
                exclude: [path.resolve(__dirname, "node_modules")],
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.scss$/,
                exclude: [path.resolve(__dirname, "node_modules")],
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap")
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
                exclude: [path.resolve(__dirname, "node_modules")],
                loader: "file"
            },
            {
                test: /\.jade$/,
                include: [path.resolve(__dirname, "app")],
                exclude: [path.resolve(__dirname, "node_modules")],
                loader: "jade"
            }
        ]
    }
};
