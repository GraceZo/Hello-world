<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <ul v-if="value">
        <li v-for="data in computedList" :key="data.cinemaId">
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
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    computedList () {
      return this.$store.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  methods: {
    onSearch () {},
    onCancel () {
      this.$router.back()
    }
  },
  mounted () {
    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch('getCinemaData', this.$store.state.cityId)
    } else {
    }
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
</style>
