const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/admin/web/wholeProcessMonit/applyDimensionDetail.ajax',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          applyOrder: {
            'applyId': '申请单ID',
            'applyNumber': '申请单',
            'combineWorkOrderNumber': '调单编号',
            'fileNo': '局数据文号',
            'bBossTime': 'BBOSS同步业编时间',
            'applyTime': '局管接收工单时间/工单申请时间',
            'planFinishTime': '2023-02-17 16:30:00', // '要求完成时间',
            'finishedTime': '' // 归档时间
          },
          taskOrder: [{
            'taskId': '任务单ID',
            'taskNumber': '任务单编号',
            'taskStatus': '任务单状态'
          }],
          dispatchOrderCompany: [{
            'dispatchId': '派单ID',
            'netElement': '网元',
            'dispatchStatus': '状态',
            'listSendData': {
              'linkTitle': 'title',
              'linkRecordData': [
                {
                  sendNetwork: '派单网页',
                  taskNumber: '任务单编号',
                  startTime: '2023-01-02 12:12:36',
                  endTime: '2023-01-02 12:12:36',
                  linkStatus: '处理环节状态:1-下发成功，2-下发败',
                  makeTime: '制作时长',
                  operator: '操作人'
                }
              ]
            }
          }, {
            'dispatchId': '派单ID',
            'netElement': '网元2',
            'dispatchStatus': '状态',
            'listSendData': {
              'linkTitle': 'title',
              'linkRecordData': [
                {
                  sendNetwork: '派单网页2',
                  taskNumber: '任务单编号',
                  startTime: '2023-01-02 12:12:36',
                  endTime: '2023-01-02 12:12:36',
                  linkStatus: '1',
                  makeTime: '制作时长',
                  operator: '操作人'
                }
              ]
            }
          }
          ]
        }
      }
    }
  },
  {
    url: '/admin/web/wholeProcessMonit/taskDimensionDetail.ajax',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          taskOrder: {
            'taskId': '申请单ID',
            'applyIds': ['申请单1', 'SQD123123213'],
            'combineNumber': '调单编号',
            'combineWorkOrderNumber': '调单编号',
            'fileNo': '局数据文号',
            'planFinishTime': '2023-02-17 16:30:00', // '要求完成时间',
            'finishedTime': '' // 归档时间
          }
        }
      }
    }
  },
  {
    url: '/admin/web/wholeProcessMonit/linkMonitDetailByApplyId.ajax',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          'applyOrderStorage': {
            'linkName': '申请单入库', // 圆点上方文字，是节点描述的，流程图只有17个节点或者18个节点，所以其实这两是固定的内容
            'linkNameDesc': '一段内容，可以有换无污染热温热我报表行符\r\n哈', // 圆点下方文字
            'linkStatus': '1', // 注意，这里直接用文字了： 节点状态：1-执行中，2-异常，3-已完成，0-未执行四种
            'popovers': [
              {
                'linkTitle': '标题1:xxxx申请单',
                'linkTtitleDesc': '耗时：3h',
                'linkRecordData': [
                  // 这里也是直接用文字了
                  { '开始时间': '2023-02-13', '结束时间': '2023-02-13 14:23:15', '结果': '成功', '耗时': '03:01', '监控状态': '1-正常，2-异常，3-已完成', '异常原因': '异常原因' }
                  // { 'step': '步骤', 'stepInTime': '进入时间', 'startTime': '2023-01-02 12:12:36', 'endTime': '2023-01-02 12:12:36', 'result': '结果', 'takeUpTime': '耗时', 'monitStatus': '监控状态:1-正常，2-异常，3-已完成', 'remark': '异常原因' }
                ]
              },
              {
                'linkTitle': 'title',
                'linkTtitleDesc': '耗时：3h',
                'linkRecordData': [
                  { '开始时间': '2023-02-13', '结束时间': '2023-02-13 14:23:15', '结果': '成功', '耗时': '03:01', '监控状态': '1-正常，2-异常，3-已完成', '异常原因': '异常原因' }
                ]
              }
            ]
          },

          applyOrderLeaderAudit: {
            'linkName': '省领导审批'
            // 其它信息同申请单入库
          },
          applyOrderDataCheck: {
            'linkName': '数据审核'
            // 其它信息同申请单入库
          },
          applyOrderGenerateCombine: {
            'linkName': '生成调单'
            // 其它信息同申请单入库
          },
          combineOrderLeaderAudit: {
            'linkName': '领导审批'
            // 其它信息同申请单入库
          },
          combineOrderPipStorage: {
            'linkName': '数据入库'
            // 其它信息同申请单入库
          },
          dispatchOrderDistribute: {
            'linkName': '派单'
            // 其它信息同申请单入库
          },
          taskOrderLineUp: {
            'linkName': '排队等待'
            // 其它信息同申请单入库
          },
          taskOrderRiskAssessment: {
            'linkName': '风险评估'
            // 其它信息同申请单入库
          },
          taskOrderBeforehand: {
            'linkName': '事前核查'
            // 其它信息同申请单入库
          },
          taskOrderGenerateScheme: {
            'linkName': '生成制作方案'
            // 其它信息同申请单入库
          },
          taskOrderAuditScheme: {
            'linkName': '审核方案'
            // 其它信息同申请单入库
          },
          taskOrderTreasury: {
            'linkName': '金库确认'
            // 其它信息同申请单入库
          },
          taskOrderInstructSend: {
            'linkName': '指令下发'
            // 其它信息同申请单入库
          },
          taskOrderInstructSendAudit: {
            'linkName': '下发审核'
            // 其它信息同申请单入库
          },
          taskOrderAfterwardsAudit: {
            'linkName': '事后核查'
            // 其它信息同申请单入库
          },
          taskOrderFile: {
            'linkName': '任务单归档'
            // 其它信息同申请单入库
          },
          applyOrderFile: {
            'linkName': '申请单归档'
            // 其它信息同申请单入库
          }
        }

      }
    }
  },
  {
    url: '/admin/web/wholeProcessMonit/linkMonitDetailByTaskId.ajax',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          'applyOrderStorage': {
            'linkName': '申请单入库', // 圆点上方文字，是节点描述的，流程图只有17个节点或者18个节点，所以其实这两是固定的内容
            'linkNameDesc': '一段内容，可以有换无污染热温热我报表行符\r\n哈', // 圆点下方文字
            'linkStatus': '1', // 节点状态：1-执行中，2-异常，3-已完成，0-未执行四种
            'popovers': [
              {
                'linkTitle': '标题1:xxxx申请单',
                'linkTtitleDesc': '耗时：3h',
                'linkRecordData': [
                  { 'step': '步骤', 'stepInTime': '进入时间', 'startTime': '2023-01-02 12:12:36', 'endTime': '2023-01-02 12:12:36', 'result': '结果', 'takeUpTime': '耗时', 'monitStatus': '监控状态:1-正常，2-异常，3-已完成', 'remark': '异常原因' }
                ]
              },
              {
                'linkTitle': 'title',
                'linkTtitleDesc': '耗时：3h',
                'linkRecordData': [
                  { 'startTime': '2023-01-02 12:12:36', 'endTime': '2023-01-02 12:12:36', 'result': '结果', 'takeUpTime': '耗时', 'monitStatus': '监控状态:1-正常，2-异常，3-已完成', 'remark': '异常原因' },
                  { 'startTime': '2023-01-02 12:12:36', 'endTime': '2023-01-02 12:12:36', 'result': '结果', 'takeUpTime': '耗时', 'monitStatus': '监控状态:1-正常，2-异常，3-已完成', 'remark': '异常原因' }
                ]
              }
            ]
          },

          applyOrderLeaderAudit: {
            'linkName': '省领导审批'
            // 其它信息同申请单入库
          },
          applyOrderDataCheck: {
            'linkName': '数据审核'
            // 其它信息同申请单入库
          },
          applyOrderGenerateCombine: {
            'linkName': '生成调单'
            // 其它信息同申请单入库
          },
          combineOrderLeaderAudit: {
            'linkName': '领导审批'
            // 其它信息同申请单入库
          },
          combineOrderPipStorage: {
            'linkName': '数据入库'
            // 其它信息同申请单入库
          },
          dispatchOrderDistribute: {
            'linkName': '派单'
            // 其它信息同申请单入库
          },
          taskOrderLineUp: {
            'linkName': '排队等待'
            // 其它信息同申请单入库
          },
          taskOrderRiskAssessment: {
            'linkName': '风险评估'
            // 其它信息同申请单入库
          },
          taskOrderBeforehand: {
            'linkName': '事前核查'
            // 其它信息同申请单入库
          },
          taskOrderGenerateScheme: {
            'linkName': '生成制作方案'
            // 其它信息同申请单入库
          },
          taskOrderAuditScheme: {
            'linkName': '审核方案'
            // 其它信息同申请单入库
          },
          taskOrderTreasury: {
            'linkName': '金库确认'
            // 其它信息同申请单入库
          },
          taskOrderInstructSend: {
            'linkName': '指令下发'
            // 其它信息同申请单入库
          },
          taskOrderInstructSendAudit: {
            'linkName': '下发审核'
            // 其它信息同申请单入库
          },
          taskOrderAfterwardsAudit: {
            'linkName': '事后核查'
            // 其它信息同申请单入库
          },
          taskOrderFile: {
            'linkName': '任务单归档'
            // 其它信息同申请单入库
          }
        }

      }
    }
  },
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/flow',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: 99,
          items: [
            {
              'direction': 'normal',
              'content1': '异常：1<br>已完成：1<br>未完成：1',
              'content2': '支持使用图标',
              'status': 'success',
              'circleType': 'circle',
              'nodeType': 'start',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'title2': '耗时：3h',
                  'tableData': [
                    { '姓名': '张三', '年龄': 18, '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '姓名': '李四', '年龄': 52, '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 },
                    { '姓名': '李四', '年龄': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '开始日期': '2023-01-02 12:12:36', '结束日期': '2023-01-02 12:12:36', 'custom1': 18, '监控状态': '正常' },
                    { '开始日期': '2023-01-02 12:12:36', '结束日期': '2023-01-02 12:12:36', 'custom1': 52, '监控状态': '正常' }
                  ]
                }
              ]
            },
            {
              'direction': 'normal',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'status': 'success',
              'circleType': 'circle',
              'nodeType': 'process',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            },
            {
              'direction': 'normal',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'status': 'success',
              'circleType': 'circle',
              'nodeType': 'process',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            },
            {
              'direction': 'normal',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle',
              'status': 'success',
              'nodeType': 'process',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '姓名': '张三', '年龄': 18 },
                    { '姓名': '李四', '年龄': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            },
            {
              'direction': 'normal',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle',
              'status': 'success',
              'nodeType': 'process',
              'circleColor': 'pink',
              'frontLineColor': 'darkgray',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '姓名': '张三', '年龄': 18 },
                    { '姓名': '李四', '年龄': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            },
            {
              'direction': 'reverse',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle',
              'status': 'success',
              'nodeType': 'process',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '姓名': '张三', '年龄': 18 },
                    { '姓名': '李四', '年龄': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            },
            {
              'direction': 'reverse',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle',
              'status': 'success',
              'nodeType': 'process',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '姓名': '张三', '年龄': 18 },
                    { '姓名': '李四', '年龄': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            },
            {
              'direction': 'reverse',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle',
              'status': 'success',
              'nodeType': 'process',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '姓名': '张三', '年龄': 18 },
                    { '姓名': '李四', '年龄': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            },
            {
              'direction': 'reverse',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle-shadow',
              'nodeType': 'process',
              'status': 'success',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '姓名': '张三', '年龄': 18 },
                    { '姓名': '李四', '年龄': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            },
            {
              'direction': 'reverse',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle',
              'nodeType': 'process',
              'status': 'success',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '姓名': '张三', '年龄': 18 },
                    { '姓名': '李四', '年龄': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            },
            {
              'direction': 'normal',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle-shadow',
              'nodeType': 'process',
              'status': 'success',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '任务单编号：JSJ-20190319-6077-华为',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:45', '开始时间': '2023-02-13 14:25:45', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-爱立信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-亚信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' }
                  ]
                }
              ]
            },
            {
              'direction': 'normal',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle-shadow',
              'nodeType': 'process',
              'status': 'success',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '任务单编号：JSJ-20190319-6077-华为',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:45', '开始时间': '2023-02-13 14:25:45', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-爱立信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-亚信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' }
                  ]
                }
              ]
            },
            {
              'direction': 'normal',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle-shadow',
              'nodeType': 'process',
              'status': 'success',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '任务单编号：JSJ-20190319-6077-华为',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:45', '开始时间': '2023-02-13 14:25:45', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-爱立信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-亚信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' }
                  ]
                }
              ]
            },
            {
              'direction': 'normal',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle-shadow',
              'nodeType': 'process',
              'status': 'success',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '任务单编号：JSJ-20190319-6077-华为',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:45', '开始时间': '2023-02-13 14:25:45', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-爱立信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-亚信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' }
                  ]
                }
              ]
            },
            {
              'direction': 'normal',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle-shadow',
              'nodeType': 'process',
              'status': 'success',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '任务单编号：JSJ-20190319-6077-华为',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:45', '开始时间': '2023-02-13 14:25:45', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-爱立信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-亚信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' }
                  ]
                }
              ]
            },
            {
              'direction': 'reverse',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle-shadow',
              'nodeType': 'process',
              'status': 'error',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '任务单编号：JSJ-20190319-6077-华为',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:45', '开始时间': '2023-02-13 14:25:45', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-爱立信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-亚信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' }
                  ]
                }
              ]
            },
            {
              'direction': 'reverse',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle-shadow',
              'nodeType': 'process',
              'status': 'running',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '任务单编号：JSJ-20190319-6077-华为',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:45', '开始时间': '2023-02-13 14:25:45', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-爱立信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '2023-02-13 14:27:15', '结果': '成功', '处理人': '张三丰', '耗时': '03:01', '监控状态': '正常', '异常原因': '' }
                  ]
                },
                {
                  'title': '任务单编号：JSJ-20190319-6077-PCC-亚信',
                  'title2': '耗时：03:15',
                  'tableData': [
                    { '步骤': '采集', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' },
                    { '步骤': '核查', '进入环节时间': '2023-02-13 14:25:36', '开始时间': '2023-02-13 14:25:36', '结束时间': '', '结果': '', '处理人': '', '耗时': '', '监控状态': '', '异常原因': '' }
                  ]
                }
              ]
            },
            {
              'direction': 'reverse',
              'content1': '支持使用图标',
              'content2': '支持使用图标',
              'circleType': 'circle-shadow',
              'status': 'not-running',
              'nodeType': 'end',
              'circleColor': '#A4CDFC',
              'frontLineColor': '#A4CDFC',
              'endLineColor': '#A4CDFC',
              'popovers': [
                {
                  'title': '标题1:xxxx申请单',
                  'tableData': [
                    { '姓名': '张三', '年龄': 18 },
                    { '姓名': '李四', '年龄': 52 }
                  ]
                },
                {
                  'title': '标题2: 一段描述',
                  'tableData': [
                    { '自定义1': '张三1', '自定义2': '张三2', 'custom1': 18 },
                    { '自定义1': '李四', '自定义2': '李四2', 'custom1': 52 }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  }
]
