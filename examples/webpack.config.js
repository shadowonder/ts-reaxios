const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  /**
   * 这里使用的是多入口的页面形式，也就是多个页面的形式进行保存
   *   我们会在examples目录下创建多个子目录
   *   每个不同章节的demo放到不同的子目录中
   *   每个字目录的下会创建一个app.ts
   *   app.ts会作为webpack构建的入口文件
   *   entries 收集了多个目录的入口文件，并且每一个入口还引用了一个热更新的文件
   *   entries 是一个对象，eky作为目录名
   */
  entry: fs.readdirSync(__dirname).reduce((entries, dir) => { //读取每一个文件夹
    const fullDir = path.join(__dirname, dir);  //获取当前文件的目录
    const entry = path.join(fullDir, "app.ts"); //创建当前目录的app.ts文件
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      //在每个入口文件的文件夹下添加一个热更新的文件
      entries[dir] = ["webpack-hot-middleware/client", entry];
    }
    return entries;
  }, {}),


  /**
   * 根据不同的目录名称打包成目标js，名称和目录名一致
   * 把编译后的结果放在__build__目录下
   */
  output: {
    path: path.join(__dirname, "__build__"),
    filename: "[name].js",
    publicPath: "/__build__/"
  },

  /**
   * 使用到了tslint和tsloader在webpack中对ts文件进行转换
   */
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  /**
   * 默认解析后缀名
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  /**
   * 热更新插件和错误插件
   */
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

}


