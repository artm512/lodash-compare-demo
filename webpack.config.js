const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: {
  'full-lodash': './src/js/full-lodash.js',
  'pickup-lodash': './src/js/pickup-lodash.js'
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: '[name].js',
    // 出力先のパス（絶対パス）
    path: path.join(__dirname, 'dist/js')
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
