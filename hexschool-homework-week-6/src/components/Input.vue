<template>
    <div class="input">
        <input
            type="text"
            :value="child"
            @input="($emit('update:child', $event.target.value))"
        >
    </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    child: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text: '',
    }
  },
}
</script>

<style lang="scss"></style>
