<template>
  <div class="container">
    <div style="width: 90px;height: 88.5px"></div>
    <div class="quarter-circle"></div>
  </div>
</template>

<script>
export default {
  name: 'QuarterCircle'
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
  border: 3px solid black;
  border-bottom-style: none;
  border-right-style: none;
  border-radius: 100% 0 0 0;
}
</style>
