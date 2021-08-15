<template>
  <input type="button" @click="onclick" v-bind:value="counter">
</template>

<script>
export default {
  name: "my-counter-button",
  props: [
    'counter'
  ],
  // 子 -> 親へ送るイベント
  emits: ['increment'],
  methods: {
    onclick() {
      this.$emit('increment', Number(this.counter))
    }
  }
}
</script>

<style scoped>

</style>
