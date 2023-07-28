<template>
  <div v-if="filmInfo">
    <detail-header v-scroll="50">
      {{ filmInfo.name }}
    </detail-header>
    <!-- <img :src="filmInfo.poster" alt="" /> -->
    <div
      :style="{
        backgroundImage: 'url(' + filmInfo.poster + ')',
      }"
      class="poster"
    ></div>
    <div class="content">
      <div>{{ filmInfo.name }}</div>
      <div>
        <div class="detail-text">{{ filmInfo.category }}</div>
        <div class="detail-text">{{ filmInfo.premiereAt | dateFilter }}</div>
        <div class="detail-text">
          {{ filmInfo.nation }} | {{ filmInfo.runtime }} mins
        </div>
        <div
          class="detail-text"
          style="line-height: 0.8333rem"
          :class="isHidden ? 'hidden' : ''"
        >
          {{ filmInfo.synopsis }}
        </div>
        <div style="text-align: center">
          <i
            class="iconfont"
            @click="isHidden = !isHidden"
            :class="isHidden ? 'icon-add' : 'icon-scan'"
          ></i>
        </div>
      </div>
      <!-- Actor -->
      <div>
        <div>Actors</div>
        <detail-swiper :preview="3.5" name="actors">
          <detail-swiper-item
            v-for="(data, index) in filmInfo.actors"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + data.avatarAddress + ')',
              }"
              class="avatar"
            ></div>
            <div style="text-align: center; font-size: 12px">
              {{ data.name }}
            </div>
            <div style="text-align: center; font-size: 13px">
              {{ data.role }}
            </div>
          </detail-swiper-item>
        </detail-swiper>
      </div>

      <!-- Photos -->
      <div>
        <div>Photos</div>
        <detail-swiper :preview="2" name="photos">
          <detail-swiper-item
            v-for="(data, index) in filmInfo.photos"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + data + ')',
              }"
              class="avatar"
              @click="handlePreview(index)"
            ></div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/util/http'
import moment from 'moment'
import Vue from 'vue'
import detailSwiper from '@/components/detail/DetailSwiper'
import detailHeader from '@/components/detail/DetailHeader'
import detailSwiperItem from '@/components/detail/DetailSwiperItem'
import { ImagePreview } from 'vant'
import obj from '@/util/mixinObj'

Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('MMM Do YY')
})
Vue.directive('scroll', {
  inserted (el, binding) {
    el.style.display = 'none'

    window.onscroll = () => {
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) >
        binding.value
      ) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  // 销毁指令
  unbind () {
    window.onscroll = null
  }
})
export default {
  mixins: [obj],
  data () {
    return {
      filmInfo: null,
      isHidden: true
    }
  },

  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader
  },
  methods: {
    handlePreview (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        closeable: true
      })
    }
  },

  mounted () {
    // 当前匹配的路由
    // console.log("created", this.$route.params.id);

    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=1945416`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      // console.log(res.data.data.film);
      this.filmInfo = res.data.data.film
    })
  }
}
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 11.6667rem;
  background-position: center;
  background-size: cover;
}
.content {
  padding: 0.8333rem;
  .detail-text {
    color: #797d82;
    font-size: 0.7222rem;
    margin-top: 0.2222rem;
  }
}
.hidden {
  overflow: hidden;
  height: 1.6667rem;
}
.avatar {
  width: 100%;
  height: 4.7222rem;
  background-position: center;
  background-size: cover;
}
</style>
