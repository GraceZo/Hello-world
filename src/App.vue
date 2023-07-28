<template>
  <div>
    <tabbar ref="mytabbar" v-show="$store.state.isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <section><router-view></router-view></section>
    <!-- <img src="/Hi.png" alt=""> -->
    <!-- <input type="text" v-model="mytext">
    <button @click="handleAdd">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">
        {{data}}
      </li>
    </ul>

    <navbar myname="home" :myright="false"  @event="handleEvent">
    <div>2222222</div>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
    <div v-hello>111111111111111</div>
    <div v-hello>222222222222222</div>

    <img :src="imgUrl" alt=""> -->
  </div>
</template>
<script>
// @别名 ===>指向 src绝对路径
// import navbar from '@/components/Navbar.vue'
// import sidebar from '@/components/Sidebar.vue'
// import Vue from 'vue'
// import axios from 'axios'
// 全局或者局部注册
// Vue.component("navbar",navbar)
// Vue.directive("hello",{
//   inserted(el,binding){
//     el.style.border = ".05rem solid black"
//   }
// })
import Vue from 'vue'
import Vant from 'vant'
import tabbar from '@/components/films/Tabbar.vue'
Vue.use(Vant)
export default {
  data () {
    return {
      // myname: 'grace',
      // mytext: [],
      // datalist: [],
      // isShow:true,
      // imgUrl:"https://cdn.eventcinemas.com.au/cdn/resources/movies/10339/images/largeposter.jpg"
    }
  // },
  // components: {
  //   navbar,
  //   sidebar
  // },
  // methods: {
  //   handleAdd () {
  //     console.log(this.mytext)
  //     this.datalist.push(this.mytext)
  //   },
  //   handleEvent () {
  //     this.isShow = !this.isShow
  //   }
  // },
  // mounted () {
  //   axios.get('/grace/Movies/GetNowShowing').then(res=>{
  //     console.log(res.data)
  //   })
  },
  components: {
    tabbar
  }
}
</script>
<style lang="scss">
@import 'vant/lib/index.css';
// $width:15rem;
//   ul{
//     li{
//     background: lightblue;
//     width: $width;
//   }
//   }
*{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
.box{
  width: 20.8333rem;
  height: 10.7156rem;
}
section{
  margin-bottom: 2.7778rem;
}
</style>
