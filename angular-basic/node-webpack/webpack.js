var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var config = require("./webpack.config.js");

module.exports = function (app){
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));
}