import axiosApi from '@/utils/axiosApi'
import { IBaseResp } from './types'
export { default as chatApi } from './chat'

export default {
    chat: (params = {}) => axiosApi.post<{ content: string }, IBaseResp<unknown>>('/gw/api/v1/chat/sync', params),
    recommends: () => axiosApi.get<unknown, IBaseResp<unknown>>('/gw/api/v1/recommend/cointelegraph'),
}