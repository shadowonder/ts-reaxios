import { MyAxiosRequestConfig } from "./types"; //引入接口
import xhr from "./xhr"
import {buildURL} from "./helpers/url";

/**
 * 使用模块化的构建思想，把请求逻辑提取到xhr.ts文件当中 然后再这里引用
 * @param config
 */
function myaxios(config:MyAxiosRequestConfig):void{
  processConfig(config);
  xhr(config);
}

/**
 * 在发送url之前，我们对config进行处理
 * @param config
 */
function processConfig(config:MyAxiosRequestConfig):void{
  config.url = transformURL(config);
}
//对url进行处理
function transformURL(config:MyAxiosRequestConfig):string{
  const {url,params} = config;
  return buildURL(url,params);
}

export default myaxios;
