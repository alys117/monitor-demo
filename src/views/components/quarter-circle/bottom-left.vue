<template>
  <div class="container">
    <div class="quarter-circle"></div>
    <div style="width: 90px;height: 88.5px"></div>
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
  border-top-style: none;
  border-right: none;
  border-radius: 0 0 0 100%;
}
</style>
