# ts-reaxios 项目初始化
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
- 然后使用pull拉取代码  git pull origin master 就是把远程的master分支拉去过来合并到本地代码中
- 可以用git branch 查看当前分支
- 使用git add . 添加到工作区
- 使用commit工具 npm run commit 这样就可以直接提交代码

  ? Select the type of change that you're committing: feat:     A new feature
  ? What is the scope of this change (e.g. component or file name)? (press enter to skip)
   All files 
  ? Write a short, imperative tense description of the change:
   Init project
  ? Provide a longer description of the change: (press enter to skip)
   Initcial project by typescript library starter
  ? Are there any breaking changes? No
  ? Does this change affect any open issues? No
  
- 最终使用git push origin master 推送到目标


# 文件结构
index.ts：入口文件

types：文件夹，包含着所有的接口文件，接口文件针对着每一个ts文件都有一个规则文件
  index.ts: 主页面接口文件，
    MyAxiosRequestConfig 包含着ajax的请求参数，比如url，method等等，规范化的接口文件，不包含数据
  
