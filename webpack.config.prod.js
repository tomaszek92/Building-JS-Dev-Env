import path from 'path';
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackMd5Hash from "webpack-md5-hash";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
   debug: true,
   devtool: 'source-map',
   noInfo: false,
   entry: {
      vendor: path.resolve(__dirname, 'src/vendor'),
      main: path.resolve(__dirname, 'src/index')
   },
   target: 'web',
   output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].[chunkhash].js'
   },
   plugins: [
      new ExtractTextPlugin('[name].[contenthash].css'),
      new WebpackMd5Hash(),
      new webpack.optimize.CommonsChunkPlugin({
         name: "vendor"
      }),
      new HtmlWebpackPlugin({
         template: "src/index.html",
         inject: true
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
   ],
   module: {
      loaders: [
         {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
         {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
       ]
   }
}
