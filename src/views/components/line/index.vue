<template>
  <div class="outer">
    <div class="inner" :style="{'--color': color}"></div>
  </div>
</template>

<script>
export default {
  name: 'LinkLine',
  props: ['color']
}
</script>

<style scoped>
.outer{
  width: 50px;
  height: 180px;
  display: flex;
  align-items: center;
  /*background: #99a9bf;*/
}
.inner{
  width: 100%;
  height: 3px;
  background: var(--color, #000000);
}
</style>
