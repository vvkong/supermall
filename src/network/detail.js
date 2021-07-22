import request from './request'

export function getGoodsDetail(id) {
  return request({
    method: 'GET',
    url: '/detail',
    params: {
      id
    }
  });
}

export function getRecommendWall() {
  return request({
    method: 'GET',
    url: '/recommend',
  });
}
export class ProductInfoEntity {
  constructor(itemInfo, skuInfo, normalPrice, promotion, itemServices) {
    this.normalPrice = normalPrice;
    this.skuInfo = skuInfo;
    this.itemServices = itemServices;
    this.promotion = promotion;
    this.itemInfo = itemInfo;
  }
}
