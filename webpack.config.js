const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "src/"),
  entry: {
    'index': './js/index.js'
  },
  module: {
    rules: [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  plugins: [
    // Provides jQuery for other JS bundled with Webpack
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  output: {
    path: __dirname + "/public/",
    publicPath: "/js/",
    filename: "[name].js"
  },
  // Re loading trick when not only *.js files are modified but also *.html files.
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};


