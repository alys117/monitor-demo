<template>
  <div>
    <h1>Monitor 第一页</h1>
    <el-tooltip placement="bottom-start">
      <div slot="content">多行信息<br/>第二行信息第二行信息第二行信息第二行信息第二行信息第二行信息</div>
      <el-button>Top center</el-button>
    </el-tooltip>
    <Legend></Legend>
    <semi-circle color="darkblue" direction="right" v-if="false" />
    <div style="display: flex">
      <div style="height: 180px;width: 90px" />
      <node circle-type="circle-shadow" circle-color="blue" front-line-color="rgba(0,0,0,0)" end-line-color="skyblue" />
      <link-line color="red" />
      <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <link-line />
      <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <link-line />
      <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <link-line />
      <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
      <link-line color="red" />
      <top-right />
    </div>

    <div style="display: flex">
      <top-left />
      <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
      <link-line color="red" />
      <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <link-line />
      <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <link-line />
      <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <link-line />
      <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
      <link-line color="red" />
      <bottom-right />
    </div>
    <div style="display: flex">
      <bottom-left />
      <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />
      <link-line color="red" />
      <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <link-line />
      <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <link-line />
      <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <link-line />
      <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="rgba(0,0,0,0)" />
      <link-line v-if="false" color="red" />
      <top-right v-if="false" />
    </div>
  </div>
</template>

<script>
import SemiCircle from '@/views/components/semi-circle/index.vue'
import Legend from '@/views/components/legend/index.vue'
import Node from '@/views/components/node/index.vue'
import LinkLine from '@/views/components/line/index.vue'
import TopRight from '@/views/components/quarter-circle/top-right.vue'
import bottomRight from '@/views/components/quarter-circle/bottom-right.vue'
import TopLeft from '@/views/components/quarter-circle/top-left.vue'
import BottomLeft from '@/views/components/quarter-circle/bottom-left.vue'
export default {
  name: 'Index',
  components: { Legend, SemiCircle, Node, LinkLine, TopRight, bottomRight, TopLeft, BottomLeft }
}
</script>

<style scoped>

</style>
