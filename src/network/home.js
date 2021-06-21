import request from './request'

function getHomeIndexData() {
  return request({
    method: 'GET',
    url: '/index',
  });
}

export {
  getHomeIndexData,

}
