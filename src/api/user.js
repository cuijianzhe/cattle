import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/v1/account/user/login/',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/api/v1/account/user/current/',
    method: 'get'
  })
}

export function logout(data) {
  return request({
    url: '/api/v1/account/user/login/',
    method: 'post'
  })
}
