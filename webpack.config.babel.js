module.exports = {
  // ビルドの基点となるファイル
  entry: './vendor/entry.js',
  // ビルド後のファイル
  output: {
    path: __dirname + '/vendor',
    filename: 'bundle.js'
  },
  // 拡張子が.jsのファイルはbabel-loaderを通してビルド(node_modulesは除外)
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
