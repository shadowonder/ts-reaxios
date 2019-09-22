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
