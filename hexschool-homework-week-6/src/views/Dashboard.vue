<template>
    <div>
        <h1>管理頁面</h1>
        <router-link to="/admin/products">
            to product
        </router-link>
        |
        <router-link to="/admin/orders">
            to orders
        </router-link>
        <router-view v-if="check" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      check: false,
    }
  },
  created() {
    console.log(this.$router)
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `${token}`
    const api = `${process.env.VUE_APP_API}api/user/check` // 檢查使用者登入狀態
    this.$http.post(api).then((response) => {
      console.log('user/check', response)
      if (response.data.success) {
        this.check = true
      } else {
        this.$router.push('/login')
      }
    })
  },
}
</script>
