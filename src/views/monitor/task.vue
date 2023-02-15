<template>
  <div style="position: relative;display: flex;overflow: auto">
    <div style="height: calc(100vh - 17px);width: 320px;flex-shrink: 0;border-right: 1px solid rgba(229, 229, 229, 1);">
      <div class="left-container">
        <div style="margin-top: 10px">
          任务单：<span style="color: rgba(42, 130, 228, 1);">APNKT-JS-200721--华为</span>
        </div>
        <div>
          状态：自动执行
        </div>
        <div class="flex">
          <div>局数据文号：</div>
          <div>
            <div style="cursor: pointer;color: #20a0ff;margin-bottom: 5px">JSJ-19002834-PCC-001</div>
            <div style="cursor: pointer;color: #20a0ff;margin-bottom: 5px">JSJ-19002834-PCC-002</div>
            <div style="cursor: pointer;color: #20a0ff;margin-bottom: 5px">JSJ-19002834-PCC-003</div>
          </div>
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
      spread: false, // 展开收起
      deadline: Date.now() + 1000 * 60 * 39, // Date.now() + 1000 * 60 * 60 * 8
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
    const tmp = []
    for (let i = 0; i < this.flow.length; i++) {
      if (!tmp[Math.floor(i / 5)]) {
        tmp[Math.floor(i / 5)] = []
      }
      tmp[Math.floor(i / 5)][i % 5] = i
    }
    this.group = tmp
    // this.$forceUpdate() // 重新渲染
  },
  methods: {}
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
