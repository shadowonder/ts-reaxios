import {MyAxiosRequestConfig} from "./types";

/**
 * 发送数据的逻辑模块，这个模块是提取了index.ts的模块化处理方式
 * @param config
 */
export default function xhr(config:MyAxiosRequestConfig):void{
  //通过解构赋值，获得data和url和method
  // 如果method和data都没有数据，我们可以给他一个默认值
  const {data = null, url ,method = "get"} = config;

  /**
   * 使用XML的ajax实例
   */
  const request = new XMLHttpRequest();
  //第一个参数为method，必须为大写，第二个参数为url，第三个参数为是否为异步执行
  request.open(method.toUpperCase(),url,true);
  //发送
  request.send(data);

}
