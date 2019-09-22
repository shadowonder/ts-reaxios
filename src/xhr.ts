import { MyAxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { parseHeaders } from './helpers/headers'

/**
 * 发送数据的逻辑模块，这个模块是提取了index.ts的模块化处理方式
 * @param config
 */
export default function xhr(config: MyAxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    //通过解构赋值，获得data和url和method
    // 如果method和data都没有数据，我们可以给他一个默认值
    const { data = null, url, method = 'get', headers, responseType } = config

    /**
     * 使用XML的ajax实例
     */
    const request = new XMLHttpRequest()

    // 如果设置了responsetype，就付给responsetype
    if (responseType) {
      request.responseType = responseType
    }

    // 第一个参数为method，必须为大写，第二个参数为url，第三个参数为是否为异步执行
    request.open(method.toUpperCase(), url, true)

    // 如果返回状态为4，也就是成功相应的话我们就把结果返回过去
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      //解析headers，同时设置为object
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      // 根据响应体是不是text，来判断究竟是response还是responsetext
      const responseData = responseType !== 'text' ? request.response : request.responseText

      // 然后给response赋值
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }

      // 异步调用
      resolve(response)
    }

    // 需要在open以后设置header
    Object.keys(headers).forEach(name => {
      // 当数据为空的时候，我们没必要设置headers，所以可以直接删除headers
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    // 发送
    request.send(data)
  })
}
