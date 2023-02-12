<template>
  <div style="display: flex;align-items: center">
    <div class="point-container">
      <div style="display: flex;align-items:center;justify-content: center;height: 50px" />
      <div class="tip-container">
        <el-popover placement="bottom" popper-class="my-tooltip" trigger="click">
          <div style="width: 600px;height: 150px; background-color: #5a5e66">
            123123123123中文
          </div>
          <div slot="reference" :class="circleType?circleType:'circle'" :style="pointVar" />
        </el-popover >
        <el-popover
          v-scoped="this"
          transition="abc"
          placement="bottom"
          title="标题"
          trigger="click"
        >
          <div style="width: 600px;height: 150px; background-color: #5a5e66">
            123123123123中文
          </div>
          <br>
          <div slot="reference">click 激活</div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Node2',
  props: ['content1', 'circleType', 'circleColor', 'frontLineColor', 'endLineColor'],
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
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
  },
  mounted() {
  }
}
</script>

<style scoped>
.point-container{
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
.front-line{
  width: 30px;
  background-color: var(--frontLineColor, black);
  height: 3px
}
.end-line{
  width: 30px;
  background-color: var(--endLineColor, black);
  height: 3px
}
.head p, .foot p{
  text-align: center;
  font-size: 12px;
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.my-tooltip div{
    color: rgba(56, 56, 56, 1);
}
::v-deep .my-tooltip.el-tooltip__popper {
  border: 1px solid rgba(229, 229, 229, 1); /* el-tooltip 弹出层边框的颜色 */
}
::v-deep .my-tooltip.el-tooltip__popper[x-placement^=bottom] .popper__arrow {
  border-bottom-color: rgba(229, 229, 229, 1); /* el-tooltip 弹出层小箭头的颜色 */
}
::v-deep .my-tooltip.el-tooltip__popper[x-placement^=top] .popper__arrow {
  border-top-color: rgba(229, 229, 229, 1);
}
</style>
<style>
.el-table{
  border: 1px solid rgba(229, 229, 229, 1);
  border-collapse: collapse;
}
.el-table td, .el-table th {
  padding: 2px;
}
</style>
<style scoped>
.abc-enter-active, .abc-leave-active {
  transition: all .3s;
}
.abc-enter, .abc-leave-to {
  opacity: 0;
  transform: translate(-50px, -50px) scale(0.3);
}
</style>
