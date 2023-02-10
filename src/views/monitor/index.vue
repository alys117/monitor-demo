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
          <Countdown></Countdown>
        </div>
      </div>
    </div>
    <div style="height: 100%;flex: 1;min-width: 1000px;padding: 20px">
      <div class="flex-space-between">
        <Legend />
        <el-button type="primary" size="mini">返回</el-button>
      </div>
      <div style="width: 980px;">
        <div style="display: flex;">
          <div style="height: 180px;width: 90px" />
          <node circle-type="circle-shadow" circle-color="blue" front-line-color="rgba(0,0,0,0)" end-line-color="skyblue" />
          <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
          <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
          <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
          <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
          <top-right />
        </div>
        <div style="display: flex;flex-direction: row-reverse">
          <bottom-right />
          <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
          <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
          <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
          <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
          <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
          <top-left />
        </div>
        <div style="display: flex">
          <bottom-left />
          <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
          <node content1="这文文这是一段文文这是一段文文" />
          <node content1="这是一段文文这是一段文文" />
          <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
          <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
          <top-right />
        </div>
        <div style="display: flex;flex-direction: row-reverse">
          <bottom-right />
          <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
          <node content1="这是一段文文这是一段文文这是一段文文" />
          <node content1="这是一段文文文这是一段文文这是一段文文" />
          <node content1="这是一段文文这是一文这是一段文文这是一段文文" />
          <node circle-type="circle-shadow" circle-color="blue" front-line-color="rgba(0,0,0,0)" end-line-color="" />
          <top-right v-if="false" />
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
export default {
  name: 'Index',
  components: { Legend, Node, TopRight, bottomRight, TopLeft, BottomLeft, Countdown },
  methods: {
    hilarity() {
      this.$notify({
        title: '提示',
        message: '时间已到，你可知寸金难买寸光阴？',
        duration: 0
      })
    }
  },
  data() {
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 8,
      activities: [{
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
      }]
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
