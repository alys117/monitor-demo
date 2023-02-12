<template>
  <div style="position: relative;display: flex;overflow: auto;">
    <div style="flex-shrink:0 ;width: 400px;background-color: #20a0ff">123</div>
    <div style="height: 100%;flex: 1;min-width: 1200px;padding: 20px">
      一段文字一段文字一段文字一段文字一段文字一段文字一段文字
      <node2 content1="这是一段文文这是一段文文这是一段文文这是一段文文" />
      <el-tooltip>
        <div slot="content"> dfdsfsd</div>
        <span>阿斯蒂芬</span>
      </el-tooltip>
      <el-popover
        v-scoped="this"
        placement="bottom"
        width="400"
        transition="abc"
        trigger="click"
      >
        <el-table :data="gridData">
          <el-table-column width="150" property="date" label="日期" />
          <el-table-column width="100" property="name" label="姓名" />
          <el-table-column width="300" property="address" label="地址" />
        </el-table>
        <el-button slot="reference">click 激活</el-button>
      </el-popover>
    </div>
  </div>
<!--  <div style="width: 100%; min-width: 1080px;overflow: scroll;">-->
<!--    <div style="width: 1000px;height: 600px;background-color: #5a5e66;position: absolute;overflow: scroll">1</div>-->
<!--    <div style="width: 980px;display: none">-->
<!--      <div style="display: flex;">-->
<!--        <div style="height: 180px;width: 90px" />-->
<!--        <node circle-type="circle-shadow" circle-color="blue" front-line-color="rgba(0,0,0,0)" end-line-color="skyblue" />-->
<!--        <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />-->
<!--        <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />-->
<!--        <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />-->
<!--        <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />-->
<!--        <top-right />-->
<!--      </div>-->
<!--      <div style="display: flex;flex-direction: row-reverse">-->
<!--        <bottom-right />-->
<!--        <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />-->
<!--        <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />-->
<!--        <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />-->
<!--        <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />-->
<!--        <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />-->
<!--        <top-left />-->
<!--      </div>-->
<!--      <div style="display: flex">-->
<!--        <bottom-left />-->
<!--        <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />-->
<!--        <node content1="这文文这是一段文文这是一段文文" />-->
<!--        <node content1="这是一段文文这是一段文文" />-->
<!--        <node content1="这是一段文文这是一段文文这是一段文文这是一段文文" />-->
<!--        <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />-->
<!--        <top-right />-->
<!--      </div>-->
<!--      <div style="display: flex;flex-direction: row-reverse">-->
<!--        <bottom-right />-->
<!--        <node circle-type="circle-shadow" circle-color="blue" front-line-color="" end-line-color="orange" />-->
<!--        <node content1="这是一段文文这是一段文文这是一段文文" />-->
<!--        <node content1="这是一段文文文这是一段文文这是一段文文" />-->
<!--        <node content1="这是一段文文这是一文这是一段文文这是一段文文" />-->
<!--        <node circle-type="circle-shadow" circle-color="blue" front-line-color="rgba(0,0,0,0)" end-line-color="" />-->
<!--        <top-right v-if="false" />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>
<script>
import Node from '@/views/components/node/index.vue'
import Node2 from '@/views/components/node/index2.vue'
import TopRight from '@/views/components/quarter-circle/top-right.vue'
import bottomRight from '@/views/components/quarter-circle/bottom-right.vue'
import TopLeft from '@/views/components/quarter-circle/top-left.vue'
import BottomLeft from '@/views/components/quarter-circle/bottom-left.vue'
export default {
  name: 'Test2',
  components: { Node, Node2, TopRight, bottomRight, TopLeft, BottomLeft },
  data() {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}

</script>
<style scoped>
.abc-enter-active, .abc-leave-active {
  transition: all .3s;
}
.abc-enter, .abc-leave-to {
  opacity: 0;
  transform: translate(-50px, -50px) scale(0.3);
}
</style>
