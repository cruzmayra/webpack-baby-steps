const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry:  {
    home: path.resolve(__dirname, 'src/js/index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js' /* template de webpack */
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          /* se sustituye por style-loader */
          // {
          //   loader: MiniCSSExtractPlugin.loader
          // },
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server'
    })
    /* se elimina este plugin para mejorar la eficiencia, es más fácil inyectar el css que extraerlo */
    // new MiniCSSExtractPlugin({
    //   filename: 'css/[name].css'
    // })
  ]
}