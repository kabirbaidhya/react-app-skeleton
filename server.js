var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const SERVER_PORT = 3000;
const SERVER_HOST = 'localhost';

new WebpackDevServer(webpack(config), {
    contentBase: 'public/',
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(SERVER_PORT, SERVER_HOST, function(err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://' + SERVER_HOST + ':' + SERVER_PORT);
});
