<template>
  <div style="position: relative;display: flex;overflow: auto">
    <div style="min-height: calc(100vh - 17px);width: 350px;flex-shrink: 0;border-right: 1px solid rgba(229, 229, 229, 1);">
      <div class="left-container">
        <div style="margin-top: 20px">
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
          <p>剩余时间：</p>
          <Countdown :end="deadline" />
        </div>
      </div>
    </div>
    <div style="height: 100%;flex: 1;min-width: 1000px;padding: 20px">
      <div class="flex-space-between">
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
      deadline: Date.now() + 1000 * 60 * 60 * 8,
      activities: [
        {
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-circle-check'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          icon: 'el-icon-circle-check',
          size: 'large',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          icon: 'el-icon-circle-check',
          size: 'large'
        }, {
          content: '默认样式的节点',
          icon: 'el-icon-circle-check',
          size: 'large',
          timestamp: '2018-04-03 20:46'
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
    console.log(this.group, 111111)
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
