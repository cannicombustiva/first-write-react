var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + './app/index.js',
  filename: 'index.html',
  inject: 'body'
})

module.export = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_module/, loader: 'babel.loader'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
