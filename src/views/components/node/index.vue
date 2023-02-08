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
      <div :ref="here" class="tip-container">
        <el-tooltip :ref="here+'_inner'" placement="bottom" effect="light" popper-class="my-tooltip" :append-to-body="false">
          <div slot="content" style="width: 600px">
            <el-table
              :header-cell-style="{background:'rgba(240, 245, 255, 1)'}"
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="80">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </div>
          <div :class="circleType?circleType:'circle'" :style="pointVar" />
        </el-tooltip>
      </div>
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
  },
  data() {
    return {
      here: 'a_' + Math.random(),
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
  mounted() {
    // 在mounted的时候只需要使用这句话。
    this.$refs[this.here].appendChild(
      this.$refs[this.here + '_inner'].popperVM.$el
    )
    console.log(this.here)
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
