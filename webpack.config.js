const GasPlugin = require('gas-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
    ],
  },
  plugins: [
    new GasPlugin(),
    new es3ifyPlugin(),
  ],
  target: 'node'
};
