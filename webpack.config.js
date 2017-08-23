module.exports = {
  entry: './test/spec.js',
  output: {
    path: require('path').join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: '#inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  target: 'web',
  node: { fs: 'empty' }
};
