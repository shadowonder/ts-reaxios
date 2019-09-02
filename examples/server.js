/**
 * 在package的script中添加了dev属性，可以直接启动服务器
 * @type {createApplication}
 */
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackConfig = require('./webpack.config.js')

const app = express()
const compiler = webpack(WebpackConfig) //require一个webpack
/**
 * 使用express构建一个服务器，在build目录下
 */
app.use(
  webpackDevMiddleware(compiler, {//使用webpack进行编译
    publicPath: '/__build__/',
    stats: {
      colors: true,
      chunks: false
    }
  })
)

// 根据webpack使用热更新
app.use(webpackHotMiddleware(compiler));
// 静态文件目录，也就是当前文件夹
app.use(express.static(__dirname));


// bodyParser是用来解析request包中的数据的
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extend:true
}));

/**
 * 页面跳转，基本的get路由，返回一个简单的json helloworld
 * @type {Router|router}
 */
const router = express.Router();
router.get("/simple/get",function(req,res){
  res.json({
    msg:"Hello world"
  })
})

app.use(router);

const port = process.env.PORT || 8080;
module.exports = app.listen(port,() => {
  console.log(`Server listening on http://localhost${port} , Ctrl+c to stop`)
});



