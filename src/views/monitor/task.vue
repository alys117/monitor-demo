<template>
  <div style="position: relative;display: flex;overflow: auto">
    <div class="gundongtiao" style="height: calc(100vh - 17px);width: 320px;flex-shrink: 0;border-right: 1px solid rgba(229, 229, 229, 1);">
      <div class="left-container gundongtiao">
        <div style="margin-top: 10px">
          任务单：<span style="color: rgba(42, 130, 228, 1);">{{ taskOrder.taskId }}</span>
        </div>
        <div>
          状态：自动执行
        </div>
        <div class="flex">
          <div>申请单：</div>
          <div>
            <div v-for="item in taskOrder.applyIds" :key="item" style="cursor: pointer;color: #20a0ff;margin-bottom: 5px">
              {{ item }}
            </div>
          </div>
        </div>
        <div>
          调单编号：{{ taskOrder.combineWorkOrderNumber }}
        </div>
        <div>
          局数据文号：{{ taskOrder.fileNo}}
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
          <Countdown ref="countdown" :end="deadline" />
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
import { getLinkDetailByTaskId, getTaskDetail } from '@/api/table'
export default {
  name: 'Index',
  components: { Legend, Node, TopRight, bottomRight, TopLeft, BottomLeft, Countdown },
  data() {
    return {
      spread: false, // 展开收起
      deadline: Date.now() + 1000 * 60 * 39, // Date.now() + 1000 * 60 * 60 * 8
      taskOrder: {},
      activities: [
        {
          content: '要求完成时间/完成时限',
          timestamp: '2018-04-12 20:46:11',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-circle-check'
        }, {
          content: '归档时间',
          icon: 'el-icon-circle-check',
          size: 'large',
          timestamp: ''
        }
      ],
      flow: [],
      group: []
    }
  },
  mounted() {
    getTaskDetail({ applyId: this.$route.query.taskId || '' }).then(res => {
      console.log(res.data)
      this.taskOrder = res.data.taskOrder
      this.activities[0].timestamp = this.taskOrder.planFinishTime
      this.activities[1].timestamp = this.taskOrder.finishedTime
      this.deadline = Date.parse(new Date(this.taskOrder.planFinishTime || 0)) // 计时器要求输入时间戳
      this.$refs.countdown.countdown(this.deadline)
    })
    getLinkDetailByTaskId({ taskId: this.$route.query.taskId || '' }).then(res => {
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
      !res.data.applyOrderFile || this.flow.push(res.data.applyOrderFile)
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
      // this.$forceUpdate() // 重新渲染,如果不使用tmp变量的话，需要这句
    })
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.gundongtiao{
  @media screen and (max-width: 1320px) {
    height: calc(100vh - 17px);
  }
  height: 100vh;
}
.left-container{
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 17px);
  overflow: auto;
  gap: 20px;
  >div{
    margin-top: 20px;
  }
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
  padding: 4px;
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
