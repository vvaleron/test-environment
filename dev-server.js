var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
    // webpack-dev-server options

    contentBase: "./build",
    //contentBase: "http://localhost:3000/app",

    hot: true,
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: false,


    // webpack-dev-middleware options
    quiet: false,
    noInfo: false,
    lazy: true,
    filename: "index.html",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true }
});
server.listen(3000, "localhost", function() {});
console.log('====================================================');
console.log('');
console.log('server successfully started in http://localhost:3000');
console.log('');
console.log('====================================================');
