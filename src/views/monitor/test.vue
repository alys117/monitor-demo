<template>
  <div style="position: relative;background: #f1f1f1;display: flex;overflow: auto">
    <div style="min-height: calc(100vh - 17px);width: 300px;background: #20a0ff;flex-shrink: 0">
      side
      <countdown></countdown>
      <Line1 color="red" />
      <semi-circle color="darkblue" direction="right" />
      side
      <div ref="here" class="holly">
        <el-tooltip
          :ref="mypop"
          placement="bottom-start"
          effect="light"
          popper-class="mytip"
          :append-to-body="false"
        >
          <div slot="content">多行信息<br>第二行信息第二行信息第二行信息第二行信息第二</div>
          <el-button>Top center</el-button>
        </el-tooltip>
      </div>
    </div>
    <div style="height: 100%;flex: 1;background: yellowgreen;min-width: 1000px">
      <iframe :src="src" style="border: none;width: 600px;height: 250px" />
      <el-select v-model="a" placeholder="请选择" :popper-append-to-body="false">
        <el-option
          v-for="item in [{value:1,label:'21'}]"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-table
        ref="tableRef"
        :data="tableData"
        border
        stripe
        show-summary
      >
        <el-table-column label="序号" type="index" align="center" fixed width="60" />
        <el-table-column
          label="日期"
          prop="date"
          align="center"
          fixed
          sortable
          sort-by="date"
          :width="flexColumnWidth('日期','date')"
        />
        <el-table-column
          label="姓名"
          prop="name"
          align="center"
          fixed
          sortable
          sort-by="branch_no"
        />
        <el-table-column
          label="薪资"
          prop="salary"
          align="center"
          fixed
          sortable
          sort-by="salary"
          :width="flexColumnWidth('薪资的大小','salary')"
        />
        <el-table-column
          label="地址"
          prop="address"
          align="center"
          fixed
          sortable
          sort-by="address"
          :width="flexColumnWidth('地址','address')"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
import countdown from '@/views/components/countdown/index.vue'
import SemiCircle from '@/views/components/semi-circle/index.vue'
import Line1 from '@/views/components/line/index.vue'
export default {
  name: 'Test',
  components: {
    SemiCircle, Line1, countdown
  },
  data() {
    return {
      a: '',
      mypop: 'hhaa',
      src: 'http://192.168.0.249',
      tableData: [{
        date: '2016-05-02',
        name: '马云',
        salary: 1000,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '姚明',
        salary: 4000,
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '盖茨',
        salary: 2000,
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        salary: 1300,
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  mounted() {
    // this.src = 'http://192.168.0.249'
    // 在mounted的时候只需要使用这句话。
    this.$refs.here.appendChild(
      this.$refs[this.mypop].popperVM.$el
    )
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
    flexColumnWidth(label, prop) {
      // console.log('label', label)
      // console.log('prop', prop)
      // 1.获取该列的所有数据
      const arr = this.tableData.map(x => x[prop])
      arr.push(label) // 把每列的表头也加进去算
      // console.log(arr)
      // 2.计算每列内容最大的宽度 + 表格的内间距（依据实际情况而定）
      return (this.getMaxLength(arr) + 25) + 'px'
    }
  }
}
</script>

<style scoped>
.holly{
  display: inline-block;
}
.mytip div{
  color: pink;
}
::v-deep .mytip.el-tooltip__popper {
  border: 1px solid rgba(229, 229, 229, 1); /* el-tooltip 弹出层边框的颜色 */
}
::v-deep .mytip.el-tooltip__popper[x-placement^=bottom] .popper__arrow {
  border-bottom-color: rgba(229, 229, 229, 1); /* el-tooltip 弹出层小箭头的颜色 */
}
</style>
<style scoped>
.el-table /deep/ th {
  padding: 0;
  white-space: nowrap;
  min-width: fit-content;
}

.el-table /deep/ td {
  padding: 1px;
  white-space: nowrap;
  width: fit-content;
}

/** 修改el-card默认paddingL:20px-内边距 **/
>>> .el-card__body {
  padding: 10px;
}

.el-table /deep/ .cell {
  white-space: nowrap;
  width: fit-content;
}
</style>
