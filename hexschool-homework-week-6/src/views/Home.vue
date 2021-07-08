<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >
        <ProductPage msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import ProductPage from '@/components/ProductPage.vue' // @對應的就是src這個目錄

export default {
  name: 'Home',
  components: {
    ProductPage,
  },
}
</script>
