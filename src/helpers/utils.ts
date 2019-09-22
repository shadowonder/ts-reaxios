const toString = Object.prototype.toString;
//检测当前value是否为日期
export function isDate(val:any): val is Date{ //使用参数谓词保护，这样就可以直接使用val中date函数了
  return toString.call(val) === "[object Date]";
}

export function isObject(val:any):val is Object{//谓词保护，返回的也是boolean
  // return typeof val === "object"; //如果是null也会为true
  return val !== null && typeof val === "object";
}
