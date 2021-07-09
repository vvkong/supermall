import request from './request'

function getHomeIndexData() {
  return request({
    method: 'GET',
    url: '/index',
  });
}

function getGoodsList(type, page) {
  return request({
    method: 'GET',
    url: '/goods',
    params: {
      type,
      page
    }
  });
}

function getGoodsDetail(id) {
  return request({
    method: 'GET',
    url: '/detail',
    params: {
      id
    }
  })
}

export {
  getHomeIndexData,
  getGoodsList,
  getGoodsDetail,
}
