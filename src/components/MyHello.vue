<template>
  <div>
    <!--    親に要素がない時に表示される-->
    ここは共通
    <slot>フォールバックコンテンツ</slot>
    ここも共通
  </div>
</template>

<script>
export default {
  name: "MyHello"
}
</script>

<style scoped>

</style>
