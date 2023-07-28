<template>
  <ul>
    <router-link to="/films/nowplaying" custom v-slot="{ navigate, isActive }">
      <li @click="navigate">
        <span :class="isActive ? 'graceactive' : ''">Now Playing</span>
      </li>
    </router-link>
    <router-link to="/films/comingsoon" custom v-slot="{ navigate, isActive }">
      <li @click="navigate">
        <span :class="isActive ? 'graceactive' : ''">Coming Soon</span>
      </li>
    </router-link>
  </ul>
</template>

<style lang="scss" scoped>
ul{
    display: flex;
    height: 2.72222rem;
    line-height: 2.72222rem;
    li{
        flex: 1;
        text-align: center;
    }
}
.graceactive{
    color: rgb(2, 70, 2);
    border-bottom: 2px solid rgb(2, 70, 2);
}
</style>
