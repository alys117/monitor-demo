import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
export function getFlow(params) {
  return request({
    url: '/vue-admin-template/flow',
    method: 'get',
    params
  })
}

export function getMainDetail(data) {
  return request({
    url: '/web/wholeProcessMonit/applyDimensionDetail.ajax',
    method: 'post',
    data
  })
}
export function getTakeDetail(data) {
  return request({
    url: '/web/wholeProcessMonit/taskDimensionDetail.ajax',
    method: 'post',
    data
  })
}
export function getLinkDetailByApplyId(data) {
  return request({
    url: '/web/wholeProcessMonit/linkMonitDetailByApplyId.ajax',
    method: 'post',
    data
  })
}
export function getLinkDetailByTaskId(data) {
  return request({
    url: '/web/wholeProcessMonit/linkMonitDetailByTaskId.ajax',
    method: 'post',
    data
  })
}
