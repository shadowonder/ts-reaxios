/**
 * 这个文件是用来定义公共的接口配置文件的
 */
// 定义一个传输的方法类型
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

// 定义Axios异步传输的参数类型方法接口
export interface MyAxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType //typescript字符串自变量类型
}

// 定义相应类型接口
export interface AxiosResponse {
  data: any // 响应数据
  status: number // 响应类型编号
  statusText: string // 响应类型
  headers: any // 响应头
  config: MyAxiosRequestConfig //请求配置
  request: any // 请求体
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
