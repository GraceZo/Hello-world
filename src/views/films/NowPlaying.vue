<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="No more infooo~"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="data in datalist"
        :key="data.filmId"
        @click="handleClick(data.filmId)"
      >
        <img :src="data.poster" alt="" />
        <div>
          <div class="title">{{ data.name }}</div>
          <div class="content">
            <div :class="data.grade ? '' : 'hidden'">
              Grade:<span>{{ data.grade }}</span>
            </div>
            <div class="actors">Actors:{{ data.actors | actorFilter }}</div>
            <div>{{ data.nation }} | {{ data.runtime }} mins</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'

Vue.filter('actorFilter', (data) => {
  if (data === undefined) return 'No actor'
  return data.map((item) => item.name).join(' ')
})

export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1,
      total: 0
    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=3943152`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      // console.log(res.data.Data.Movies)
      this.datalist = res.data.data.films
      this.total = res.data.data.total
      // console.log(res.data.data.total)
    })
  },
  methods: {
    onLoad () {   
      // console.log("No more")
      // console.log(this.datalist.length)
      this.current++
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=3943152`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        // console.log(res.data.Data.Movies)
        this.datalist = [...this.datalist, ...res.data.data.films]
        // loading主动设置成false
        this.loading = false
      })
      // 总长度匹配，禁止懒加载
      if (this.datalist.length === this.total ) {
        // console.log(this.datalist.length)
        this.finished = true
        return
      }
    },
    handleClick (id) {
      // console.log(id)
      // 编程式导航
      // location.href = '#/details'

      // vue的跳转方式 /details/11111
      // 1.通过路径跳转
      // this.$router.push(`/details/${id}`)

      // 2.通过命名路由跳转
      this.$router.push({
        name: 'graceDetails',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.van-list {
  .van-cell {
    overflow: hidden;
    padding: 15px;
    img {
      width: 3.6667rem;
      float: left;
    }
    .title {
      font-size: 16px;
    }
    .content {
      font-size: 13px;
      color: gray;
      .actors {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 12.2222rem;
      }
    }
  }
}
.hidden {
  display: none;
}
</style>
