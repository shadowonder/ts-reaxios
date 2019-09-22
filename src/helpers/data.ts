import { isPlainObject } from './utils'

/**
 * 把所有的数据变化成为字符串，如果数据不是对象，那么就返回数据
 * @param data
 */
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

/**
 * 这个方法接受数据，如果数据是json字符串的话，我们尝试把json转换为object
 * @param data
 */
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
