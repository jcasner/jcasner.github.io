const TerserPlugin = require('terser-webpack-plugin');

var config = {
  entry: './index.jsx',
  output: {
    path: `${__dirname}/__build__`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        resolve: { extensions: [".js", ".jsx"] },
        loader: 'babel-loader'
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ]
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
}
