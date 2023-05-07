import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  timeout: 100000,
})
// api.defaults.withCredentials = true
// api.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const pendingRequest: any[] = []

const handleRequestIntercept = (config: any) => {
  // 区别请求的唯一标识，这里用方法名+请求路径
  // 如果一个项目里有多个不同baseURL的请求
  // 可以改成`${config.method} ${config.baseURL}${config.url}`
  const requestMark = `${config.method} ${config.url}`
  // 找当前请求的标识是否存在pendingRequest中，即是否重复请求了
  const markIndex = pendingRequest.findIndex((item) => item.name === requestMark)
  // 存在，即重复
  if (markIndex > -1) {
    // 取消上个重复的请求
    pendingRequest[markIndex].cancel()
    // 删掉在pendingRequest中的请求标识
    pendingRequest.slice(markIndex, 1)
  }
  // （重新）新建针对这次请求的axios的cancelToken标识
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  config.cancelToken = source.token
  // 设置自定义配置requestMark项，主要用于响应拦截中
  config.requestMark = requestMark
  // 记录本次请求的标识
  pendingRequest.push({
    name: requestMark,
    cancel: source.cancel,
    // routeChangeCancel: config.routeChangeCancel // 可能会有优先级高于默认设置的routeChangeCancel项值
  })
  // 针对配置ignoreAuthor字段的接口，无需带上token
  return config
}

const handleResponseIntercept = (config: any) => {
  // 根据请求拦截里设置的requestMark配置来寻找对应pendingRequest里对应的请求标识
  const marketIndex = pendingRequest.findIndex((item) => item.name === config.requestMark)
  // 找到了就删除标识
  marketIndex > -1 && pendingRequest.slice(marketIndex, 1)
}

// 默认把请求视为切换路由就会把pending状态的请求取消，false为不取消
// instance.defaults.routeChangeCancel = true;
// 请求拦截
instance.interceptors.request.use(handleRequestIntercept, (error) => Promise.reject(error))
// 响应拦截
instance.interceptors.response.use(
  (res) => {
    handleRequestIntercept(res.config)
    return res.data
  },
  (error) => {
    let errorFormat = {
      selfCancel: null,
    }
    const response = error.response
    if (response) {
      handleResponseIntercept(response.config)
      // 设置返回的错误对象格式
      errorFormat = {
        // @ts-ignore
        status: response.status,
        data: response.data,
        message: error.message,
      }
    }
    // 如果是主动取消了请求，做个标识
    if (axios.isCancel(error)) {
      // @ts-ignore
      errorFormat.selfCancel = true
    }
    return Promise.reject(errorFormat)
  },
)

export default instance