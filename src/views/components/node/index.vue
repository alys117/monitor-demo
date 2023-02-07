<template>
  <div class="container">
    <div class="head">
      <p>申请单入库</p>
      <p>{{ content1 }}</p>
    </div>
    <div style="display: flex;align-items:center;justify-content: center;height: 50px">
      <div class="front" :style="frontLineVar">
        <div />
      </div>
      <el-tooltip placement="bottom" effect="light">
        <div slot="content">多行信息<br/>第二行信息第二行信息第二行信息第二行信息第二行信息第二行信息</div>
        <div :class="circleType?circleType:'circle'" :style="pointVar" />
      </el-tooltip>
      <div class="end" :style="endLineVar">
        <div />
      </div>
    </div>
    <div class="foot">
      <p>耗时：03:01</p>
      <p>xxxxxxxxxx和打发第三方佛挡杀佛撒</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Node',
  props: ['content1', 'circleType', 'circleColor', 'frontLineColor', 'endLineColor'],
  computed: {
    pointVar() {
      const _site = {
        '--circleColor': this.circleColor
      }
      return _site
    },
    frontLineVar() {
      const _site = {
        '--frontLineColor': this.frontLineColor
      }
      return _site
    },
    endLineVar() {
      const _site = {
        '--endLineColor': this.endLineColor
      }
      return _site
    }
  }
}
</script>

<style scoped>
.container{
  width: 100px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center
}
.head, .foot{
  height: 50px;
}
.circle{
  width: 18px;
  height: 18px;
  background-color: red;
  border-radius: 50%;
}
.circle-shadow {
  margin: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 1);
  background-color: var(--circleColor, red);
  box-shadow: 0 0 0 2px var(--circleColor, red);
  /*background-clip: padding-box;*/
}

.front, .end{
  flex: 1;
  display: flex;
  align-items:center;
}
.front div{
  width: 100%;
  height: 3px;
  background-color: var(--frontLineColor, black);
}
.end div{
  width: 100%;
  height: 3px;
  background-color: var(--endLineColor, black);
}
.head p, .foot p{
  text-align: center;
  font-size: 12px;
  margin: 0;
  padding: 0;
}
</style>
