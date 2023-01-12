import request from '@/api/request'

export const getHomeDataAPI = () => {
  return request({
    url: '/home/multidata'
  })
}
