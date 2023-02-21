<template>
  <div style="display: flex;align-items: center">
    <div class="front-line" :style="frontLineVar" />
    <div class="point-container">
      <div class="head">
        <p v-html="baseInfo.linkName"></p>
      </div>
      <div style="user-select: none;display: flex;align-items:center;justify-content: center;height: 50px">
        <div class="front" :style="frontLineVar">
          <div />
        </div>
        <div class="popover-container">
          <el-popover
            v-scoped="this"
            placement="bottom"
            transition="abc"
            trigger="click"
          >
            <div slot="reference" :class="baseInfo.linkStatus === '2' || baseInfo.linkStatus === '1' ? 'circle-shadow' :'circle'" :style="pointVar" />
            <div v-for="it in baseInfo.popovers" :key="it.title">
              <div class="flex-space-between">
                <p style="padding: 0;margin: 5px 0;color: rgba(56, 56, 56, 1)">{{ it.title }}</p>
                <p style="padding: 0;margin: 5px 0;color: rgba(56, 56, 56, 1)">{{ it.title2 }}</p>
              </div>
              <el-table
                ref="myTable"
                :data="it.linkRecordData"
                :cell-style="{'text-align':'center',color:'rgba(56, 56, 56, 1)'}"
                :header-cell-style="{background:'rgba(240, 245, 255, 1)','text-align':'center',color: 'rgba(128, 128, 128, 1)', 'font-weight':'normal'}"
                style="width: 100%"
              >
                <!-- 动态列 -->
                <el-table-column
                  v-for="(item, index) in it.dynamicColumns"
                  :key="index"
                  :prop="item.prop"
                  :width="flexColumnWidth(item.label,item.prop, it.linkRecordData)"
                >
                  <template slot="header">
                    <span>{{ item.label }}</span>
                  </template>
                  <template slot-scope="scope">
                    <span>{{ scope.row[item.prop] }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-popover>
        </div>
        <div class="end" :style="endLineVar">
          <div />
        </div>
      </div>
      <div class="foot">
        <p v-html="baseInfo.linkNameDesc ? baseInfo.linkNameDesc.replace(/\r\n/,'<br>'):''"></p>
      </div>
    </div>
    <div class="end-line" :style="endLineVar" />
  </div>
</template>

<script>
export default {
  name: 'Node',
  props: ['baseInfo', 'content1', 'circleType', 'circleColor', 'frontLineColor', 'endLineColor'],
  data() {
    return {
      popovers: [
        {
          title: '任务单编号：JSJ-20190319-6077-PCC-华为',
          title2: '耗时：03:01',
          propArr: [], // 生成dynamicColumns时的记录
          dynamicColumns: [], // 存放动态列
          tableData: [{
            '日期': '2016-05-02',
            '姓名': '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            custom1: '123'
          }, {
            '日期': '2016-05-04',
            '姓名': '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            custom1: '123'
          }, {
            '日期': '2016-05-01',
            '姓名': '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            custom1: '123'
          }, {
            '日期': '2016-05-03',
            '姓名': '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            custom1: '123',
            custom2: '123222'
          }]
        },
        {
          title: '第二条',
          title2: '',
          propArr: [], // 生成dynamicColumns时的记录
          dynamicColumns: [], // 存放动态列
          tableData: [{
            '日期': '2016-05-02',
            '姓名': '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            custom1: '123'
          }, {
            '日期': '2016-05-04',
            '姓名': '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            custom1: '123'
          }, {
            '日期': '2016-05-01',
            '姓名': '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            custom1: '123'
          }, {
            '日期': '2016-05-03',
            '姓名': '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            custom1: '123',
            custom2: '123222'
          }]
        }
      ]
    }
  },
  computed: {
    pointVar() {
      // return { '--circleColor': this.baseInfo.circleColor }
      if (this.baseInfo.linkStatus === '3') {
        return { '--circleColor': 'rgba(42, 130, 228, 1)' }
      } else if (this.baseInfo.linkStatus === '1') {
        return { '--circleColor': 'rgba(67, 207, 124, 1)' }
      } else if (this.baseInfo.linkStatus === '2') {
        return { '--circleColor': 'rgba(255, 87, 51, 1)' }
      } else if (this.baseInfo.linkStatus === '0') {
        return { '--circleColor': 'rgba(128, 128, 128, 1)' }
      } else {
        return { '--circleColor': 'rgba(0, 0, 0, 1)' }
      }
    },
    frontLineVar() {
      if (this.baseInfo.nodeType === 'start') {
        return { '--frontLineColor': 'rgba(0, 0, 0, 0)' }
      } else if (this.baseInfo.nodeType === 'end' && this.baseInfo.direction === 'reverse') {
        return { '--frontLineColor': 'rgba(0, 0, 0, 0)' }
      } else {
        return {
          '--frontLineColor': this.baseInfo.direction === 'reverse' ? this.baseInfo.endLineColor : this.baseInfo.frontLineColor
        }
      }
    },
    endLineVar() {
      if (this.baseInfo.nodeType === 'end' && this.baseInfo.direction !== 'reverse') {
        return { '--endLineColor': 'rgba(0, 0, 0, 0)' }
      } else {
        return {
          '--endLineColor': this.baseInfo.direction === 'reverse' ? this.baseInfo.frontLineColor : this.baseInfo.endLineColor
        }
      }
    }
  },
  created() {
    if (!this.baseInfo.popovers) return
    this.baseInfo.popovers.forEach(it => {
      it.propArr = []
      it.dynamicColumns = []
      it.linkRecordData.forEach(item => {
        Object.keys(item).forEach(key => {
          if (it.propArr.indexOf(key) === -1) {
            it.propArr.push(key)
            it.dynamicColumns.push({ prop: key, label: key })
          }
        })
      })
    })
  },
  methods: {
    /**
     * 遍历列的所有内容，获取最宽一列的宽度
     * @param arr
     */
    getMaxLength(arr) {
      return arr.reduce((acc, item) => {
        if (item) {
          const calcLen = this.getTextWidth(item)
          if (acc < calcLen) {
            acc = calcLen
          }
        }
        return acc
      }, 0)
    },
    /**
     * 使用span标签包裹内容，然后计算span的宽度 width： px
     * @param valArr
     */
    getTextWidth(str) {
      let width = 0
      const html = document.createElement('span')
      html.innerText = str
      html.className = 'getTextWidth'
      document.querySelector('body').appendChild(html)
      width = document.querySelector('.getTextWidth').offsetWidth
      document.querySelector('.getTextWidth').remove()
      return width
    },
    /**
     * el-table-column 自适应列宽
     * @param prop_label: 表名
     * @param table_data: 表格数据
     */
    flexColumnWidth(label, prop, table) {
      // console.log('label', label)
      // console.log('prop', prop)
      // 1.获取该列的所有数据
      const arr = table.map(x => x[prop])
      arr.push(label) // 把每列的表头也加进去算
      // console.log(arr)
      // 2.计算每列内容最大的宽度 + 表格的内间距（依据实际情况而定）
      return (this.getMaxLength(arr) + 25) + 'px'
    }
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
  display: flex;
  justify-content: center;
  align-items: end;
}
.head p, .foot p{
  line-height: 18px;
  text-align: center;
  font-size: 12px;
  margin: 0;
  padding: 0;
}
.head p, .foot p{
  text-align: center;
  font-size: 12px;
  margin: 0;
  padding: 0;
}
.circle{
  width: 18px;
  height: 18px;
  background-color: var(--circleColor, red);
  border-radius: 50%;
  cursor: pointer;
}
.circle-shadow {
  margin: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
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
<style scoped>
::v-deep .el-table{
  border: 1px solid rgba(229, 229, 229, 1);
}
::v-deep .el-table td,::v-deep .el-table th {
  padding: 2px;
}
::v-deep .el-table td, ::v-deep .el-table th.is-leaf {
  /* 去除网格和上边框 */
   border: none;
}
::v-deep .el-table::before{
  /* 去除下边框, 下面两种选一种即可 */
  height: 0;
  /*background-color: rgba(0,0,0,0);*/
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
