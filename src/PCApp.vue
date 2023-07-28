<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <!-- data.id后面加了一个空字符串，就可以将data.id从数字类型改成了字符串的形式，因为原文档中要求使用的index的数据类型是字符串 -->
        <el-submenu
          :index="data.id + ''"
          v-for="data in sideList"
          :key="data.id"
        >
          <template slot="title"
            ><i class="el-icon-message"></i>{{ data.title }}</template
          >
          <el-menu-item
            :index="item.id + ''"
            v-for="item in data.children"
            :key="item.id"
            >{{ item.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      sideList: [
        {
          id: 1,
          title: '用户管理',
          children: [
            {
              id: 2,
              title: '用户列表'
            },
            {
              id: 3,
              title: '用户权限'
            }
          ]
        },
        {
          id: 4,
          title: '权限管理',
          children: [
            {
              id: 5,
              title: '权限列表'
            },
            {
              id: 6,
              title: '角色列表'
            }
          ]
        }
      ],
      tableData: Array(20).fill(item)
    }
  }
  // methods:{
  //     handlePrimary(){
  //         console.log("primary")
  //     }
  // }
}
</script>

<style lang="scss" scoped>
@import "element-ui/lib/theme-chalk/index.css";
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
