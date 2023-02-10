<template>
  <div>
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
</template>
<script>
import Node from '@/views/components/node/index.vue'
import TopRight from '@/views/components/quarter-circle/top-right.vue'
import bottomRight from '@/views/components/quarter-circle/bottom-right.vue'
import TopLeft from '@/views/components/quarter-circle/top-left.vue'
import BottomLeft from '@/views/components/quarter-circle/bottom-left.vue'
export default {
  name: 'Test2',
  components: { Node, TopRight, bottomRight, TopLeft, BottomLeft }
}

</script>
<style>

</style>
