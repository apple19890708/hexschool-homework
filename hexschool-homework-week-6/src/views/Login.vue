<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            id="inputEmail"
            v-model="user.username"
            type="email"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            id="inputPassword"
            v-model="user.password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          const { token, expired } = response.data;
          console.log(token, expired);
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          this.$router.push("/admin/products");
        }
      });
    },
  },
};
</script>
