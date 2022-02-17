const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, './src/main.js'),
  output: { 
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },      
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  'useBuiltIns': 'usage',
                  'corejs': 3,
                  'targets': {
                    ie: '9',
                  },
                },
              ],
            ],
            plugins: [
              ["import", {
                "libraryName": "vant",
                "libraryDirectory": "es",
                "style": true
              }]
            ]            
          },
        }
      },
      {
        test: /\.(jpg|png|gif|jpeg|woff|svg|eot|ttf)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            esModule: false,
            name: '/images/[name].[contentHash].[ext]',
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          //注： vue-style-loader和MiniCssExtractPlugin.loader两个只能用一个
          // MiniCssExtractPlugin.loader, // 使用这个loader会把css分离打包到index.css中
          'vue-style-loader', // 使用vue-style-loader会把css打包到js里，之后使用style标签内嵌样式
          'css-loader',
          'less-loader',
        ],
        // use: [
        //   {
        //     loader: 'vue-style-loader',
        //   },
        //   {
        //     loader: 'css-loader',
        //   },
        //   {
        //     loader: 'less-loader',
        //   } ,         
        // ],
      },
    ],
  },
  // devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-eval-source-map',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    // host: '192.168.1.114',
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/assets/html/index.ejs'),
      filename: path.resolve(__dirname, './dist/index.html'),
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './static',
          to: './static'
        },
      ],
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./library/vue.json')
    }),        
  ],
  resolve: {
    alias: {
      '@': path.resolve('./')
    }
  }  
}