<template>
    <div>
        <h1> single product page </h1>
        <span>ID: {{ productId }}</span>
        <ul>
            <li
                v-for="item in product"
                :key="item.id"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      productId: this.$route.params.id,
      product: [],
    }
  },
  mounted() {
    const { id } = this.$route.params
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
    this.$http.get(url)
      .then((res) => {
        this.product = res.data.product
      })
  },
}
</script>
