<template>
  <div class="custom-table">
    <el-table ref="myTable" :data="tableData" border style="width: 100%">
      <!-- 动态列 -->
      <el-table-column
        v-for="(item, index) in dynamicColumns"
        :key="index"
        :prop="item.prop"
      >
        <template slot="header">
          {{ item.label }}
        </template>
        <template slot-scope="scope">
          <span>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'CustomTable',
  data() {
    return {
      isEditHeader: false,
      isEdit: true,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          custom1: ''
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          col2: 112,
          col1: 'ddd'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          col2: 112,
          col1: 'ddd'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          col2: 112,
          col1: 'ddd'
        }
      ],
      propArr: [], // 生成dynamicColumns时的记录
      dynamicColumns: [] // 存放动态列
    }
  },
  created() {
    this.tableData.forEach(item => {
      Object.keys(item).forEach(key => {
        if (this.propArr.indexOf(key) === -1) {
          this.propArr.push(key)
          this.dynamicColumns.push({ prop: key, label: key })
        }
      })
    })
    console.log(this.tableData)
  },
  methods: {
    submit() {
      const arr = []
      this.tableData.forEach(data => {
        const temp = {}
        temp.name = data.name
        const obj = {}
        this.dynamicColumns.forEach(col => {
          // 仅把有效的列提交
          if (data.custom[col.prop]) {
            obj[col.prop] = data.custom[col.prop]
          }
        })
        if (JSON.stringify(obj) !== '{}') {
          temp.custom = JSON.stringify(obj)
        }
        arr.push(temp)
      })
      console.log(arr)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
