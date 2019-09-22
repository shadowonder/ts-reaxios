import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

// 发送一个post请求，请求是一个data请求体
// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// // 发送一个请求，请求体是一个array
// const arr = new Int32Array([21, 31])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })


/*******************************************************************
 * Header 的请求测试用例
 *******************************************************************/
// 发送普通对象，没有配置headers
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})
// 手动配置
axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json;'
  },
  data: {
    a: 1,
    b: 2
  }
})

// 配置了urlparams对象
const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

// 在这里，我们设置了searchparams对象，但是我们并没有设置属性。
// 但是浏览器会自动识别并帮我们设置了属性
axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
})






