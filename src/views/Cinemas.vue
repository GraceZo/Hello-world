<template>
  <div>
    <van-nav-bar title="Cinemas" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
      <template #left>
        {{ cityName }}<van-icon name="arrow-down" color="black" />
      </template>
      <template #right>
        <van-icon name="search" size="18" color="black" />
      </template>
    </van-nav-bar>
    <div class="box" :style="{ height: height }">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div class="left">
            <div class="cinema_name">{{ data.name }}</div>
            <div class="cinema_text">{{ data.address }}</div>
          </div>

          <div class="right cinema_name">
            <div>${{ data.lowPrice / 100 }}uper</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      height: '0px'
    }
  },
  computed: {
    ...mapState(['cinemaList', 'cityId', 'cityName'])
  },
  methods: {
    ...mapActions(['getCinemaData']),
    ...mapMutations(['clearCinema']),
    handleLeft () {
      this.$router.push('/city')

      // 清空cinemaList
      this.clearCinema()
    },
    handleRight () {
      this.$router.push('/cinemas/search')
    }
  },
  mounted () {
    // 动态计算高度
    this.height =
      document.documentElement.clientHeight -
      this.$refs.navbar.$el.offsetHeight -
      document.querySelector('footer').offsetHeight +
      'px'

    // 分发
    if (this.cinemaList.length === 0) {
      this.getCinemaData(this.cityId).then(res => {
        this.$nextTick(() => {
          new BScroll('.box', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      this.$nextTick(() => {
        new BScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
    // http({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=7741945`,
    //   headers: {
    //     "X-Host": "mall.film-ticket.cinema.list",
    //   },
    // }).then((res) => {
    //   // console.log(res.data.data.cinemas)
    //   this.cinemaList = res.data.data.cinemas;
    //   this.$nextTick(() => {
    //     new BScroll(".box", {
    //       scrollbar: {
    //         fade: true,
    //       },
    //     });
    //   });
    // });
  }
}
</script>

<style lang="scss" scoped>
li {
  padding: 0.8333rem;
  display: flex;
  justify-content: space-between;
  .left {
    width: 11.7778rem;
  }
  .cinema_name {
    font-size: 0.8333rem;
  }
  .cinema_text {
    color: #797d82;
    font-size: 0.6667rem;
    margin-top: 0.2778rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.box {
  //height: 34.3333rem;
  overflow: hidden;
  position: relative; //修正滚动条的位置
}
</style>
