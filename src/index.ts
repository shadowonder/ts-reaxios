import { MyAxiosRequestConfig } from './types' //引入接口
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'

/**
 * 使用模块化的构建思想，把请求逻辑提取到xhr.ts文件当中 然后再这里引用
 * @param config
 */
function myaxios(config: MyAxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

/**
 * 在发送url之前，我们对config进行处理
 * @param config
 */
function processConfig(config: MyAxiosRequestConfig): void {
  config.url = transformURL(config)
  // headers必须优先处理，因为data会把数据转换为字符串对象，所以需要优先处理header
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}
// 对url进行处理
function transformURL(config: MyAxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
// 对data请求体进行处理
function transformRequestData(config: MyAxiosRequestConfig): any {
  return transformRequest(config.data)
}
// 对header请求进行处理
function transformHeaders(config: MyAxiosRequestConfig) {
  const { headers = {}, data } = config // 这里给headers一个默认的空值，因为在我们的辅助函数中我们直接进行判断headers是否为空
  return processHeaders(headers, data)
}

export default myaxios
