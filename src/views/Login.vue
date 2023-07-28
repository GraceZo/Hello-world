<template>
    <div>
        login
        <button @click="handleLogin">Login</button>
    </div>
</template>

<script>
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        localStorage.setItem('token', 'token from backend')
        // this.$router.back() //返回

        // 1.获取query字段

        // 2.跳转到想要去的页面
        this.$router.push(this.$route.query.redirect)
      }, 0)
    }
  }
}
</script>
