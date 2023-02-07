<template>
  <div>
    <div class="semi-circle" :style="cssVar" />
  </div>
</template>

<script>
export default {
  name: 'SemiCircle',
  props: ['color', 'direction'],
  computed: {
    cssVar() {
      let directionStyle = ''
      let borderRadius = '90px 0 0 90px' /* 左上、右上、右下、左下 */
      if (this.direction === 'left') {
        directionStyle = 'border-right-style'
        borderRadius = '90px 0 0 90px'
      } else if (this.direction === 'right') {
        directionStyle = 'border-left-style'
        borderRadius = '0 90px 90px 0'
      } else { }
      const _site = {
        '--color': this.color,
        [directionStyle]: 'none',
        '--borderRadius': borderRadius
      }
      return _site
    }
  }
}
</script>

<style scoped>

/* 半圆 */
.semi-circle{
  width:90px;
  height:180px;
  border: 3px solid var(--color, red);
  /*border-right-style: none;*/
  border-radius: var(--borderRadius); /* 左上、右上、右下、左下 */
}
</style>
