import { isPlainObject } from './utils'
/**
 * 默认情况下，我们的contenttype是大小写区分的，所以我们在编写的时候我们需要把content type的大小写修改成我们需要的
 */
function normalizeHeaderName(headers: any, normalizedName: string): void {
  // 如果没有header，就直接return
  if (!headers) {
    return
  }

  // 循环所有的header，然后normalize
  Object.keys(headers).forEach(name => {
    // 如果字符串大小写不同，但是内容相同，我们就把header中的name替换成正规形式的名字
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type') // 把header修改为normalize过的名称

  // 然后修改header发送的属性
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

/**
 * 对头部信息进行解析
 * @param headers
 */
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  // 把每一行的数据转换成一个keyvalue然后把所有的kv转换为对象
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
