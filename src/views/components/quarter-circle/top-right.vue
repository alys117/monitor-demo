<template>
  <div class="container">
    <div style="width: 90px;height: 88.5px"></div>
    <div class="quarter-circle" :style="{'--color': color}"></div>
  </div>
</template>

<script>
export default {
  name: 'QuarterCircle',
  props: {
    color: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style scoped>
.container{
  height: 180px;
  width: 90px;
}
.quarter-circle{
  width: 90px;
  height: 91.5px;
  border: 3px solid var(--color, black);
  border-bottom-style: none;
  border-left-style: none;
  border-radius: 0 100% 0 0;
  /*transform: translateY(-1.5px);*/
}
</style>
