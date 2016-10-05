const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.config");

config.entry.app.unshift("webpack-dev-server/client?http://localhost:4000/");

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  stats: { colors: true }
});

server.listen(4000, "localhost", function() {});
