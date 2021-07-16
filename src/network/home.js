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

export {
  getHomeIndexData,
  getGoodsList,
}
