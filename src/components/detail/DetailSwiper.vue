<template>
    <div class="swiper" :class="name">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </template>

<script>
import Swiper from 'swiper/bundle'
export default {
  props: {
    preview: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: 'grace'
    }
  },
  mounted () {
    new Swiper('.' + this.name, {
      slidesPerView: this.preview,
      spaceBetween: 30,
      freeMode: true
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../node_modules/swiper/swiper.min.css';
</style>
