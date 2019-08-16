const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html模板

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
  mode: 'production', // webpack4新增属性，默认返回production,提供一些默认配置，例如cache:true
  devtool: 'cheap-module-eval-source-map',
  // source-map每个module生成对应的map文件
  // eval 每一个module模块执行eval，不生成map文件，在尾部生成一个sourceURL对应前后关系，所以更快
  // cheap 列信息 VLQ编码
  // module 包含了模块之间的sourcemap
  entry: {
    home: './src/index.js', // 设置入口文件
  },
  output: {
    filename: 'bundle.js', // 生成的js文件的名字
    path: resolve('dist'), // 生成的js存放目录
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: { // 配置loader
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        include: resolve('src'), // 只解析src下面的文件,不推荐用exclude
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ["import", {
                libraryName: "antd",
                style: 'css'
              }] // antd按需加载
            ]
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('/node_modules/swiper/dist/css'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, //  配置处理 .css 文件的第三方loader 规则
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.jpg | webp | gif |png |jpeg | bmp$/,
        use: 'url-loader?limit=9090&name=[hash:8]-[name].[ext]'
      }
      //limit 设置图片大于多少字节就不进行base64编码 
      //hash 默认会在内存中的图片加上随机的字符串
      // [name] : 图片名会原样输出 
      // [ext] : 保存原来的图片的后缀名
    ],
  },
  devServer: { // 配置webpack-dev-server， 在本地启动一个服务器运行
    host: 'localhost', // 服务器的ip地址 希望服务器外可以访问就设置 0.0.0.0
    port: 8088, // 端口
    open: true, // 自动打开页面
    historyApiFallback: true,
    proxy: { //此处用于解决跨域问题
      "/v1": {
        "target": "http://192.168.0.156:114/",
        "changeOrigin": true
        }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('/dist/index.html'), // 生成的html文件存放的地址和文件名
      template: resolve("/index.html"), // 基于index.html模板进行生成html文件
    }),
  ]
}
