export interface IBaseResp<D = any> {
    status: number
    message: string
    data: D
}

export enum THUMB_TYPES {
  UP = 1,
  DOWN = -1
}