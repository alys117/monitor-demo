<template>
  <div style="position: relative;background: #99a9bf;display: flex;overflow: auto">
    <div style="min-height: calc(100vh - 17px);width: 300px;background: #20a0ff;flex-shrink: 0">side</div>
    <div style="height: 100%;flex: 1;background: yellowgreen;min-width: 1000px">
      <iframe :src="src" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      src:  'http://192.168.0.249'
    }
  },
  mounted() {
    //this.src = 'http://192.168.0.249'
  }
}
</script>

<style scoped>

</style>
