<template>
  <div class="city">
    <van-index-bar :index-list="computedList" @select="handleChange">
      <div v-for="data in cityList" :key="data.type">
        <van-index-anchor :index="data.type" />
            <van-cell @click="handleClick(item)" :title="item.name" v-for="item in data.list" :key="item.cityId" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import http from '@/util/http'
import { Toast } from 'vant'
import { mapState } from 'vuex'
import obj from '@/util/mixinObj'
export default {
  mixins: [obj], // 混入
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    computedList () {
      return this.cityList.map(item => item.type)
    },
    ...mapState(['cityName'])

  },
  mounted () {
    http({
      url: '/gateway?k=2219911',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then((res) => {
      this.cityList = this.renderCity(res.data.data.cities)
    })
  },
  methods: {
    handleChange (data) {
      Toast(data)
    },
    renderCity (list) {
      // console.log(list)
      const cityList = []
      const letterList = []
      for (let i = 65; i < 91; i++) {
        letterList.push(String.fromCharCode(i))
      }
      // console.log(letterList)
      letterList.forEach((letter) => {
        const newList = list.filter((item) => item.pinyin.substring(0, 1).toUpperCase() === letter
        )

        newList.length > 0 &&
          cityList.push({
            type: letter,
            list: newList
          })
      })
      return cityList
    },
    handleClick (item) {
      // 传统的多页面方案
      // 1. location.href = '#/cinemas?cityname' + item.name
      // 2. cookie,localStorage

      // 单页面方案
      // 1. 中间人模式
      // 2. bus事件总线 $on, $emit

      // vuex-状态管理模式
      // this.$store.state.cityName = item.name
      this.$store.commit('changeCityName', item.name)
      this.$store.commit('changeCityId', item.cityId)
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
.van-toast--html, .van-toast--text{
    min-width: 30px;
}
</style>
