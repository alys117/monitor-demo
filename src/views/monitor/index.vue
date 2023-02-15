<template>
  <div style="position: relative;display: flex;overflow: auto">
    <div style="height: calc(100vh - 17px);width: 320px;flex-shrink: 0;border-right: 1px solid rgba(229, 229, 229, 1);">
      <div class="left-container">
        <div style="margin-top: 10px">
          申请单：<span style="color: rgba(42, 130, 228, 1);">APNKT-JS-200721-0001</span>
        </div>
        <div>
          调单编号：JSJ-19002834-PCC
        </div>
        <div>
          局数据文号：JSJ-19002834-PCC
        </div>
        <div class="timeline-container">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
        <div>
          剩余时间：
          <Countdown :end="deadline" />
        </div>
        <div style="flex-shrink: 0;width: 100%;">
          <div>
            任务单：
          </div>
          <el-table
            ref="myTable"
            :data="taskTableData.slice(0,spread?taskTableData.length:3)"
            :cell-style="{'text-align':'center',color:'rgba(56, 56, 56, 1)'}"
            :header-cell-style="{background:'rgba(240, 245, 255, 1)','text-align':'center',color: 'rgba(128, 128, 128, 1)', 'font-weight':'normal'}"
            style="width: 100%"
          >
            <el-table-column
              label="任务单编号"
            >
              <template slot-scope="scope">
                <el-link type="primary" @click="linkClick(scope.row)"> {{ scope.row.taskid }} </el-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width="100"
            />
          </el-table>
          <div style="margin:10px 0; color: #20a0ff;text-align: center;cursor: pointer;user-select: none">
            <div v-if="!spread" @click="spread=!spread">
              <div style="display: inline-block;transform: rotate(90deg);">
                <i class="el-icon-d-arrow-right" />
              </div>
              展开全部
            </div>
            <div v-if="spread" @click="spread=!spread">
              <div style="display: inline-block;transform: rotate(-90deg);">
                <i class="el-icon-d-arrow-right" />
              </div>
              收起全部
            </div>
          </div>

          <div>
            派单省公司：
          </div>
          <el-table
            ref="myTable"
            :data="taskSendProvinceTableData"
            :cell-style="{'text-align':'center',color:'rgba(56, 56, 56, 1)'}"
            :header-cell-style="{background:'rgba(240, 245, 255, 1)','text-align':'center',color: 'rgba(128, 128, 128, 1)', 'font-weight':'normal'}"
            style="width: 100%"
          >
            <el-table-column
              label="网元"
            >
              <template slot-scope="scope">
                <el-link type="success" @click="cellClick(scope.row)"> {{ scope.row.netEl }} </el-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="status"
              width="100"
              label="状态"
            />
          </el-table>
        </div>
      </div>
    </div>
    <div style="height: 100%;flex: 1;min-width: 1000px;padding: 20px">
      <div class="flex-space-between" style="width: 1000px">
        <Legend />
        <el-button type="primary" size="mini">返回</el-button>
      </div>
      <div style="width: 980px;">
        <div v-for="(idx,index) in group" :key="index">
          <div :class="index%2 === 0?'flex':'flex-row-reverse'">
            <bottom-left v-if="index%2 ===0 " :color="index === 0 ? 'rgba(0,0,0,0)': flow[idx[0]].frontLineColor" />
            <bottom-right v-if="index%2 !==0 " :color="index === 0 ? 'rgba(0,0,0,0)': flow[idx[0]].frontLineColor" />
            <node v-for="i in idx" :key="i" :base-info="flow[i]" />
            <top-right v-if="index%2 === 0" :color="index === group.length-1 ? 'rgba(0,0,0,0)': flow[idx.slice(-1)].endLineColor" />
            <top-left v-if="index%2 !== 0" :color="index === group.length-1 ? 'rgba(0,0,0,0)': flow[idx.slice(-1)].endLineColor" />
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :title="netTitle"
      :visible.sync="dialogVisible"
      width="80%"
    >
      <div>
        <el-table
          ref="myTable"
          :data="netElTableData"
          :cell-style="{'text-align':'center',color:'rgba(56, 56, 56, 1)'}"
          :header-cell-style="{background:'rgba(240, 245, 255, 1)','text-align':'center',color: 'rgba(128, 128, 128, 1)', 'font-weight':'normal'}"
          style="width: 100%"
        >
          <el-table-column
            prop="netEl"
            label="派单网元"
            width="100"
          />
          <el-table-column
            prop="taskid"
            label="任务单编号/消息ID"
            show-overflow-tooltip
          />
          <el-table-column
            prop="sendTime"
            label="派单时间"
            width="160"
          />
          <el-table-column
            prop="status"
            label="处理环节状态"
            width="110"
          />
          <el-table-column
            prop="finishTime"
            label="任务完成时间"
            width="160"
          />
          <el-table-column
            prop="makeTIme"
            label="该网元制作时长(工作日时长)"
            width="220"
          />
          <el-table-column
            prop="operator"
            label="制作人"
            width="80"
          />
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Legend from '@/views/components/legend/index.vue'
import Node from '@/views/components/node/index.vue'
import TopRight from '@/views/components/quarter-circle/top-right.vue'
import bottomRight from '@/views/components/quarter-circle/bottom-right.vue'
import TopLeft from '@/views/components/quarter-circle/top-left.vue'
import BottomLeft from '@/views/components/quarter-circle/bottom-left.vue'
import Countdown from '@/views/components/countdown/index.vue'
import result from '@/views/result.json'
export default {
  name: 'Index',
  components: { Legend, Node, TopRight, bottomRight, TopLeft, BottomLeft, Countdown },
  data() {
    return {
      dialogVisible: false,
      netTitle: '',
      spread: false, // 展开收起
      deadline: Date.now() + 1000 * 60 * 39, // Date.now() + 1000 * 60 * 60 * 8
      taskTableData: [
        {
          taskid: 'JSJ-19002834-PCC',
          status: '自动执行'
        },
        {
          taskid: 'JSJ-19002834-PCC',
          status: '人工下发'
        },
        {
          taskid: 'JSJ-19002834-PCC',
          status: '人工下发'
        },
        {
          taskid: 'JSJ-19002834-PCC',
          status: '人工下发'
        },
        {
          taskid: 'JSJ-19002834-PCC',
          status: '人工下发'
        }
      ],
      taskSendProvinceTableData: [
        {
          netEl: '传统DNS',
          status: '归档'
        },
        {
          netEl: '传统MME',
          status: '制作中'
        }
      ],
      netElTableData: [
        {
          netEl: '广东(传统)',
          taskid: '00215566562552245556666',
          sendTime: '2018-04-12 20:46:11',
          status: '下发成功',
          finishTime: '2018-04-12 20:46:11',
          makeTime: '制作中',
          operator: '张三'
        },
        {
          netEl: '广东(传统)',
          taskid: '00215566562552245556666',
          sendTime: '2018-04-12 20:46:11',
          status: '下发成功',
          finishTime: '2018-04-12 20:46:11',
          makeTime: '制作中',
          operator: '张三'
        }
      ],
      activities: [
        {
          content: 'BOSS同步业编时间',
          timestamp: '2018-04-12 20:46:11',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-circle-check'
        }, {
          content: '局管接收工单时间',
          timestamp: '2018-04-03 20:46',
          icon: 'el-icon-circle-check',
          size: 'large',
          type: 'primary'
          // color: '#0bbd87'
        }, {
          content: '要求完成时间',
          timestamp: '2018-04-03 20:46',
          icon: 'el-icon-circle-check',
          type: 'primary',
          size: 'large'
        }, {
          content: '归档时间',
          icon: 'el-icon-circle-check',
          size: 'large',
          timestamp: ''
        }
      ],
      flow: result,
      group: [],
      flow1: [
        {
          direction: 'normal',
          content1: '支持使用图标',
          content2: '支持使用图标',
          circleType: 'circle',
          nodeType: 'start',
          circleColor: '#f56c6c',
          frontLineColor: '#f56c6c',
          endLineColor: '#e1e2fc',
          popovers: [
            {
              title: '标题1:xxxx申请单',
              gridData: [
                {
                  '姓名': '张三',
                  '年龄': 18
                },
                {
                  '姓名': '李四',
                  '年龄': 52
                }
              ]
            },
            {
              title: '标题2: 一段描述',
              gridData: [
                {
                  '自定义1': '张三1',
                  '自定义2': '张三2',
                  'custom1': 18
                },
                {
                  '自定义1': '李四',
                  '自定义2': '李四2',
                  'custom1': 52
                }
              ]
            }
          ]
        },
        {
          direction: 'normal',
          content1: '支持使用图标',
          content2: '支持使用图标',
          circleType: 'circle',
          nodeType: 'process',
          circleColor: '#f56c6c',
          frontLineColor: '#f56c6c',
          endLineColor: '#e1e2fc',
          popovers: [
            {
              title: '标题1:xxxx申请单',
              gridData: [
                {
                  '姓名': '张三',
                  '年龄': 18
                },
                {
                  '姓名': '李四',
                  '年龄': 52
                }
              ]
            },
            {
              title: '标题2: 一段描述',
              gridData: [
                {
                  '自定义1': '张三1',
                  '自定义2': '张三2',
                  'custom1': 18
                },
                {
                  '自定义1': '李四',
                  '自定义2': '李四2',
                  'custom1': 52
                }
              ]
            }
          ]
        },
        {
          direction: 'reverse',
          content1: '支持使用图标',
          content2: '支持使用图标',
          circleType: 'circle-shadow',
          nodeType: 'end',
          circleColor: '#f56c6c',
          frontLineColor: '#f56c6c',
          endLineColor: '#e1e2fc',
          popovers: [
            {
              title: '标题1:xxxx申请单',
              gridData: [
                {
                  '姓名': '张三',
                  '年龄': 18
                },
                {
                  '姓名': '李四',
                  '年龄': 52
                }
              ]
            },
            {
              title: '标题2: 一段描述',
              gridData: [
                {
                  '自定义1': '张三1',
                  '自定义2': '张三2',
                  'custom1': 18
                },
                {
                  '自定义1': '李四',
                  '自定义2': '李四2',
                  'custom1': 52
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted() {
    for (let i = 0; i < this.flow.length; i++) {
      if (!this.group[Math.floor(i / 5)]) {
        this.group[Math.floor(i / 5)] = []
      }
      this.group[Math.floor(i / 5)][i % 5] = i
    }
  },
  methods: {
    cellClick(row, column, cell, event) {
      console.log(row, column, cell, event)
      this.dialogVisible = !this.dialogVisible
      this.netTitle = row.netEl
    },
    linkClick(row, column, cell, event) {
      console.log(row, column, cell, event)
      this.$router.push({ path: '/monitor/task' })
    }
  }
}
</script>

<style scoped lang="scss">
.left-container{
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100vh - 17px);
  overflow: auto;
}
.timeline-container {
  margin-top: 10px;
  ::v-deep ul{
    padding-inline-start: 10px;
  }
}
.timeline-container ::v-deep .el-timeline-item__node--large {
  left: -5px;
  width: 20px;
  height: 20px;
}
</style>
<style scoped>
::v-deep .el-table{
  border: 1px solid rgba(229, 229, 229, 1);
}
::v-deep .el-table td,::v-deep .el-table th {
  padding: 2px;
}
::v-deep .el-table td{
  /* 去除网格 */
  /*border: none;*/
}
::v-deep .el-table th.is-leaf {
  /* 去除上边框 */
  border: none;
}
::v-deep .el-table::before{
  /* 去除下边框, 下面两种选一种即可 */
  height: 0;
  /*background-color: rgba(0,0,0,0);*/
}
</style>
<style scoped>
::v-deep .el-dialog__header {
  padding: 15px 15px 5px 15px;
}
::v-deep .el-dialog__body {
  padding: 15px 15px;
}
</style>
