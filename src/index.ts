import { MyAxiosRequestConfig } from "./types"; //引入接口
import xhr from "./xhr"

/**
 * 使用模块化的构建思想，把请求逻辑提取到xhr.ts文件当中 然后再这里引用
 * @param config
 */
function myaxios(config:MyAxiosRequestConfig):void{
  xhr(config);
}

export default myaxios;
