import axios from '../utils/request'
import api from './index'

export function signUp(data) {
  return axios({
    url: api.signUp,
    method: 'post',
    data: data,
  })
}

export function Query(data) {
  return axios({
    url: api.query,
    method: 'get',
    params: data,
  })
}
