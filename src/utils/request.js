import axios from 'axios'
import defaultSettings from '../config/defaultSettings'
import { ElNotification } from 'element-plus';
export const baseURL = process.env.NODE_ENV === 'development' ? defaultSettings.baseURL.dev : defaultSettings.baseURL.prod

// 正在进行中的请求列表
let reqList = []
/**
 * 阻止重复请求
 * @param {array} reqList - 请求缓存列表
 * @param {string} url - 当前请求地址
 * @param {function} cancel - 请求中断函数
 * @param {string} errorMessage - 请求中断时需要显示的错误信息
 */
const stopRepeatRequest = function (reqList, url, cancel, errorMessage) {
    const errorMsg = errorMessage || ''
    for (let i = 0; i < reqList.length; i++) {
        if (reqList[i] === url) {
            console.log("重复请求,请求被中断")
            cancel(errorMsg)
            return
        }
    }
    reqList.push(url)
}

/**
 * 允许某个请求可以继续进行
 * @param {array} reqList 全部请求列表
 * @param {string} url 请求地址
 */
const allowRequest = function (reqList, url) {
    for (let i = 0; i < reqList.length; i++) {
        if (reqList[i] === url) {
            reqList.splice(i, 1)
            break
        }
    }
}
const service = axios.create({
  baseURL: baseURL,
  timeout: 6000,
})

service.interceptors.request.use(
  (config) => {
      let cancel
      // 设置cancelToken对象
      config.cancelToken = new axios.CancelToken((config)=> {
          cancel = config
      })
      // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
      stopRepeatRequest(reqList, config.url, cancel, `已有相同请求，${config.url} 请求被中断`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
      // 增加延迟，相同请求不得在短时间内重复发送,在延迟时间内，由于请求列表还没有清除，相同的请求会在请求拦截器被拦截
      setTimeout(() => {
          allowRequest(reqList, response.config.url)
      }, 1000)

    const res = response.data
    console.log(res)
    if (res.code !== 200) {
      //谜之bug，不能用this.$Notice
      ElNotification({
        title: '操作失败',
        message: res.msg,
          type:'error'
      });
      return Promise.reject("状态异常，非正确返回结果")
    }
    // 如果接口正常，直接返回数据
    return res
  },
  (error) => {
      // 增加延迟，相同请求不得在短时间内重复发送,在延迟时间内，由于请求列表还没有清除，相同的请求会在请求拦截器被拦截
      setTimeout(() => {
          allowRequest(reqList, error.config.url)
      }, 1000)
      ElNotification({
          title: '请求失败，请勿重复请求，若请求超时请联系网站管理员',
          type: 'error',
      });
    return Promise.reject(error)
  }
)

export default service
