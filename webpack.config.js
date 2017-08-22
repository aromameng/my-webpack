var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    // filename: 'bundle.js'
    // 生成带hash值的js
    filename:'[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /(\.css$)|(\.scss$)/,
        loaders: ['style-loader', 'css-loader','sass-loader'],
        include: APP_PATH
      },
      // 小于40000的图片转base64
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      },
      //  es6处理
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      },
    ]
  },
  resolve:{
    // 别名
    alias: {
      'static': path.resolve(ROOT_PATH, 'app/static/'),
      '@':path.resolve(ROOT_PATH, 'app/')
    },
    // 自动解析确定的扩展
    extensions: [".js", ".json"]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
      // 生成静态index.html文件
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ]
};