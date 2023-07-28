<template>
  <footer>
    <ul>
      <!-- 声明式导航 -->

      <router-link to="/films" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'graceactive' : ''">
          <i class="iconfont icon-movie"></i>
          <span>Films</span>
        </li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'graceactive' : ''">
          <i class="iconfont icon-Dyanjing"></i>
          <span>Cinemas</span>
        </li>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'graceactive' : ''">
          <i class="iconfont icon-me"></i>
          <span>Center</span>
        </li>
      </router-link>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.7222rem;
  background: white;
  z-index: 100;
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 1.3889rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      i{
        font-size: 20px;
      }
      span{
        font-size: 16px;
      }
    }
  }
}
.graceactive{
  color: green;
}
</style>
