<template>
    <div>
        <h1> Products List </h1>
        <table>
            <tbody>
                <tr
                    v-for="item in products"
                    :key="item.id"
                >
                    <td>{{ item.title }}</td>
                    <td>
                        <router-link :to="`/product/${item.id}`">
                            Link
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [],
    }
  },
  created() {
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
    this.$http.get(url)
      .then((res) => {
        this.products = res.data.products
      })
  },
}
</script>
