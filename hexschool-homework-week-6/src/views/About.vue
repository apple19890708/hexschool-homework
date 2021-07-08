<template>
    <div class="about">
        <h1>This is an about pages</h1>
        <div>{{ name }}</div>
        <Input />
    </div>
</template>

<script>
import Input from '../components/Input.vue'

export default {
  name: 'About',
  components: {
    Input,
  },
  data() {
    return {
      name: 'apple',
    }
  },
  created() {

  },
}
</script>
