<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  props: {
    type: Boolean,
    default: true
  },
  mounted () {
    new Swiper('.swiper', {
      // direction: 'vertical', // 垂直切换选项
      loop: this.loop, // 循环模式选项
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../../node_modules/swiper/swiper.min.css";
</style>
