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
  // カスタムイベントでの検証
  // emits: ['increment'],
  emits: {
    increment(counter) {
      // counterが存在し、整数値であればtrueを返す
      if (counter && Number.isInteger(counter)) {
        return true
      } else {
        console.log('error: invalid increment event!')
        return false
      }
    }
  },
  methods: {
    onclick() {
      // Vuexで言うmutationとpayloadみたい
      this.$emit('increment', Number(this.counter))
    }
  }
}
</script>

<style scoped>

</style>
