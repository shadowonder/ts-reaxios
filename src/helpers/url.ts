import { isDate, isPlainObject } from './utils'

/**
 * 本地方法，用来处理转义字符串
 * @param val
 */
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+') // %20 是空格
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * 构建rul方法，用来构建url，把我们的参数添加到url中
 * @param url
 * @param params
 */
export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []
  /**
   * 遍历当前所有的key，然后通过params的数组获取所有的value
   */
  Object.keys(params).forEach(key => {
    const val = params[key]
    //如果value为null或者undefine，直接返回，进入下一个foreachitem
    if (val === null || typeof val === 'undefined') {
      return
    }

    //这个value有值，新建一个新的values用来保存value
    let values = []
    //把value放入values中，如果value不是数组，就变成数组然后放入values中
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    //遍历values中的所有数值
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val) //转换为字符串
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  //向url进行拼接
  let serializedParams = parts.join('&') //使用&来分割数组
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    //如果url中包含#就对其切片
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    //如果url已经有参数了，就直接拼接，如果没有，添加参数
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
