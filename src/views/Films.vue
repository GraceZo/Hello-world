<template>
    <div>
        <film-swiper v-if="datalist && datalist.length">
            <film-swiper-item v-for="data in datalist" :key="data.id" class="filmswiperitem" :style="{ 'background-image': `url(${data.imgUrl})` }">
              <!-- <img :src="data.imgUrl" alt=""> -->
            </film-swiper-item>
        </film-swiper>

        <film-header class="sticky"></film-header>

        <router-view></router-view>
    </div>
</template>

<script>
import filmSwiper from '../components/films/FilmSwiper'
import filmSwiperItem from '../components/films/FilmSwiperItem'
import filmHeader from '../components/films/FilmHeader'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/banner.json').then(res => {
      this.datalist = res.data.banners
    })
  },
  components: {
    filmSwiper,
    filmHeader,
    filmSwiperItem
  }
}
</script>

<style lang="scss" scoped>
.filmswiperitem{
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}
.sticky{
  position: sticky;
  top: 0;
  background:white;
  z-index: 100;
}
</style>
