import axiosApi from '@/utils/axiosApi'
import { IBaseResp } from '../types'

export default {
    getChartCategories: () => axiosApi.get<unknown, IBaseResp<unknown>>('/chart/category'),
    getTableConfig: (params: any) =>
      axiosApi.post<unknown, IBaseResp<any>>('/chart/field', params),
}