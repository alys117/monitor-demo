<template>
  <div style="position: relative;display: flex;overflow: auto">
    <div style="height: calc(100vh - 17px);width: 320px;flex-shrink: 0;border-right: 1px solid rgba(229, 229, 229, 1);">
      <div class="left-container">
        <div style="margin-top: 10px">
          申请单：<span style="color: rgba(42, 130, 228, 1);">{{ applyOrder.applyId }}</span>
        </div>
        <div>
          调单编号：{{ applyOrder.combineWorkOrderNumber }}
        </div>
        <div>
          局数据文号：{{ applyOrder.fileNo }}
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
          <div style="margin: 5px 0;">
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
                <el-link type="primary" @click="linkClick(scope.row)"> {{ scope.row.taskNumber }} </el-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="taskStatus"
              label="状态"
              width="100"
            />
          </el-table>
          <div v-if="taskTableData.length>3" style="margin:10px 0; color: #20a0ff;text-align: center;cursor: pointer;user-select: none">
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

          <div style="margin: 5px 0;">
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
                <el-link type="success" @click="cellClick(scope.row)"> {{ scope.row.netElement }} </el-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="dispatchStatus"
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
        <el-button type="primary" size="mini" @click="back()">返回</el-button>
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
import { getFlow, getMainDetail, getLinkDetailByApplyId } from '@/api/table'

export default {
  name: 'Index',
  components: { Legend, Node, TopRight, bottomRight, TopLeft, BottomLeft, Countdown },
  data() {
    return {
      applyId: '',
      applyOrder: {
        applyId: '申请单ID1',
        applyNumber: '申请单1',
        combineWorkOrderNumber: '调单编号1',
        fileNo: '局数据文号',
        bBossTime: 'BBOSS同步业编时间',
        applyTime: '工单申请时间/局管接收工单时间',
        planFinishTime: '要求完成时间',
        finishedTime: '归档时间'
      },
      taskOrder: {
        taskId: '任务单ID',
        taskNumber: '任务单编号',
        taskStatus: '任务单状态'
      },
      dispatchOrderCompany: {
        dispatchId: '派单ID',
        netElement: '网元',
        dispatchStatus: '状态'
      },
      dialogVisible: false,
      netTitle: '',
      spread: false, // 展开收起
      deadline: Date.now() + 1000 * 60 * 39, // Date.now() + 1000 * 60 * 60 * 8
      taskTableData: [
        {
          taskNumber: 'JSJ-19002834-PCC',
          taskStatus: '自动执行'
        },
        {
          taskNumber: 'JSJ-19002834-PCC',
          taskStatus: '人工下发'
        },
        {
          taskNumber: 'JSJ-19002834-PCC',
          taskStatus: '人工下发'
        },
        {
          taskNumber: 'JSJ-19002834-PCC',
          taskStatus: '人工下发'
        },
        {
          taskNumber: 'JSJ-19002834-PCC',
          taskStatus: '人工下发'
        }
      ],
      taskSendProvinceTableData: [
        {
          netElement: '传统DNS',
          dispatchStatus: '归档'
        },
        {
          netElement: '传统MME',
          dispatchStatus: '制作中'
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
          timestamp: '',
          size: 'large',
          type: '',
          icon: 'el-icon-circle-check'
        }, {
          content: '局管接收工单时间',
          timestamp: '',
          icon: 'el-icon-circle-check',
          size: 'large',
          type: ''
          // color: '#0bbd87'
        }, {
          content: '要求完成时间',
          timestamp: '',
          icon: 'el-icon-circle-check',
          type: '',
          size: 'large'
        }, {
          content: '归档时间',
          icon: 'el-icon-circle-check',
          size: 'large',
          type: '',
          timestamp: ''
        }
      ],
      flow: [],
      group: []
    }
  },
  mounted() {
    getMainDetail({ applyId: this.$route.query.applyId || '' }).then(res => {
      console.log(res.data)
      this.applyOrder = res.data.applyOrder
      this.activities[0].timestamp = this.applyOrder.bBossTime
      this.activities[1].timestamp = this.applyOrder.applyTime
      this.activities[2].timestamp = this.applyOrder.planFinishTime
      this.activities[3].timestamp = this.applyOrder.finishedTime
      this.activities.forEach(item => { if (item.timestamp) item.type = 'primary' })
      this.deadline = Date.parse(new Date(this.applyOrder.planFinishTime || 0)) // 计时器要求输入时间戳
      this.taskTableData = res.data.taskOrder
      this.netElTableData = res.data.dispatchOrderCompany
    })
    getLinkDetailByApplyId({ applyId: this.$route.query.applyId || '' }).then(res => {
      console.log(res.data)
      this.flow = []
      this.flow.push(res.data.applyOrderStorage)
      this.flow.push(res.data.applyOrderLeaderAudit)
      this.flow.push(res.data.applyOrderDataCheck)
      this.flow.push(res.data.applyOrderGenerateCombine)
      this.flow.push(res.data.combineOrderLeaderAudit)
      this.flow.push(res.data.combineOrderPipStorage)
      this.flow.push(res.data.dispatchOrderDistribute)
      this.flow.push(res.data.taskOrderLineUp)
      this.flow.push(res.data.taskOrderRiskAssessment)
      this.flow.push(res.data.taskOrderBeforehand)
      this.flow.push(res.data.taskOrderGenerateScheme)
      this.flow.push(res.data.taskOrderAuditScheme)
      this.flow.push(res.data.taskOrderTreasury)
      this.flow.push(res.data.taskOrderInstructSend)
      this.flow.push(res.data.taskOrderInstructSendAudit)
      this.flow.push(res.data.taskOrderAfterwardsAudit)
      this.flow.push(res.data.taskOrderFile)
      this.flow.push(res.data.applyOrderFile)
      this.flow.forEach((item, i) => {
        // 第一个节点的nodeType为start，最后一个节点的nodeType为end，其他为normal
        if (i === 0) item.nodeType = 'start'
        else if (i === this.flow.length - 1) item.nodeType = 'end'
        else item.nodeType = 'normal'

        // 被5除整数部分为偶数时，从左到右，为奇数时，从右到左
        if (Math.floor(i / 5) % 2 === 1) item.direction = 'reverse' // 从右到左
        else item.direction = 'normal'

        item.frontLineColor = '#A4CDFC'
        item.endLineColor = '#A4CDFC'
      })

      const tmp = []
      for (let i = 0; i < this.flow.length; i++) {
        if (!tmp[Math.floor(i / 5)]) {
          tmp[Math.floor(i / 5)] = []
        }
        tmp[Math.floor(i / 5)][i % 5] = i
      }
      this.group = tmp
      console.log(this.flow, this.group)
    })
    // getFlow().then(res => {
    //   console.log(res.data)
    //   this.flow = res.data.items
    //   const tmp = []
    //   for (let i = 0; i < this.flow.length; i++) {
    //     if (!tmp[Math.floor(i / 5)]) {
    //       tmp[Math.floor(i / 5)] = []
    //     }
    //     tmp[Math.floor(i / 5)][i % 5] = i
    //   }
    //   this.group = tmp
    // })
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
