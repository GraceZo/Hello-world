<template>
    <div class="header">
        <i class="iconfont icon-play" @click="handleBack"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.4444rem;
    line-height: 2.4444rem;
    background: white;
    text-align: center;
    i{
        position: fixed;
        left: .5556rem;
        top: 0;
        height: 2.4444rem;
        line-height: 2.4444rem;
        transform: rotate(180deg);
    }
}
</style>
