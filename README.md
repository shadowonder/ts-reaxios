# ts-reaxios
##脚手架
默认使用的是[typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter)为脚手架。
使用的开源工具包括：
* RollupJS 打包工具
* Prettier 和 TSLint 保证格式化代码以及带吧风格一致性
* TypeDoc 自动生成文档并部署到Github pages
* Jest 生成测试单元
* Commitizen 规范化提交注释
* Semantic release 管理版本和发布
* Husky 更加简单的使用git hooks
* Conventional Changelog 帮我们通过提交代码提交信息自动生成change log

##脚手架script
lint 使用lint检测ts代码
build tsc做编译，rollup做构建
start 用rollup做构建，同时开启了watch的模式
test 运行test脚本
commit 规范化的commit提交
semantic-release 发布我们的包

###使用合并脚手架
在下载脚手架以后，使用 git remote add origin \<url\> 
  然后使用pull拉取代码  git pull origin master 就是把远程的master分支拉去过来合并到本地代码中
  可以用git branch 查看当前分支
  使用git add . 添加到工作区
  使用commit工具 npm run commit 这样就可以直接提交代码
  





