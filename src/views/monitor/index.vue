<template>
  <div>
    <h1>Monitor 第一页</h1>
    <el-select v-model="a" placeholder="请选择" :popper-append-to-body="false">
      <el-option
        v-for="item in [{value:1,label:'21'}]"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <div ref="here" class="holly">
      <el-tooltip
        :ref="mypop"
        placement="bottom-start"
        effect="light"
        popper-class="mytip"
        :append-to-body="false"
      >
        <div slot="content">多行信息<br>第二行信息第二行信息第二行信息第二行信息第二</div>
        <el-button>Top center</el-button>
      </el-tooltip>
    </div>
    <Legend />
    <semi-circle v-if="false" color="darkblue" direction="right" />
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
  components: { Legend, SemiCircle, Node, LinkLine, TopRight, bottomRight, TopLeft, BottomLeft },
  data() {
    return {
      a: '',
      mypop: 'hhaa'
    }
  },
  mounted() {
    // 在mounted的时候只需要使用这句话。
    this.$refs.here.appendChild(
      this.$refs[this.mypop].popperVM.$el
    )
  }
}
</script>

<style scoped>

</style>
<style scoped>
.mytip div{
  color: pink;
}
::v-deep .mytip.el-tooltip__popper {
  border: 1px solid rgba(229, 229, 229, 1); /* el-tooltip 弹出层边框的颜色 */
}
::v-deep .mytip.el-tooltip__popper[x-placement^=bottom] .popper__arrow {
  border-bottom-color: rgba(229, 229, 229, 1); /* el-tooltip 弹出层小箭头的颜色 */
}
</style>
