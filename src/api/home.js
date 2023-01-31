import request from '@/api/request'

export const getHomeDataAPI = () => {
  return request({
    url: '/home/multidata'
  })
}
/**
 * 获取首页的商品数据
 * @param {*} type 商品类型
 * @param {*} page 页码
 * @returns Promise对象
 */
export const getHomeGoodsAPI = (type, page) => {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
