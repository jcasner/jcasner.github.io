const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  context: __dirname,
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
  plugins: (() => {
    if (process.argv.indexOf('-p') !== -1) {
      return [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
      ];
    }
    return [];
  })(),
};
