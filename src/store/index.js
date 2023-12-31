import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })],
  // state公共状态
  state: {
    cityId: '310100',
    cityName: '上海',
    cinemaList: [],
    isTabbarShow: true
  },
  // 支持同步和异步
  actions: {
    getCinemaData (store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=7741945`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then((res) => {
        // console.log(res.data.data.cinemas)
        store.commit('changeCinemaData', res.data.data.cinemas)
        // this.cinemaList = res.data.data.cinemas;
        // this.$nextTick(() => {
        //   new BScroll(".box", {
        //     scrollbar: {
        //       fade: true,
        //     },
        //   });
        // });
      })
    }
  },
  // mutation中只支持同步不支持异步
  mutations: {
    changeCityName (state, cityName) {
      state.cityName = cityName
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    changeCinemaData (state, data) {
      state.cinemaList = data
    },
    clearCinema (state) {
      state.cinemaList = []
    },
    show (state) {
      state.isTabbarShow = true
    },
    hide (state) {
      state.isTabbarShow = false
    }
  }
})

// vuex 管理保存公共状态 分散在各个组件内的状态统一管理 默认是管理在内存，一刷新页面公共状态就会丢失。需要持久化
