<template>
  <div>
    <p>DogForm</p>
    <form>
      <label for="toggle-show">ON / OFF ボタン</label>
      <input type="checkbox" id="toggle-show" v-model="panelToggle">
    </form>
    <div id="panel" v-if="panelToggle">
      見える?
    </div>
    <div v-else>
      見えてないよ
    </div>
  </div>
</template>

<script>
export default {
  name: "DogForm.vue",
  data() {
    return {
      panelToggle: true
    }
  }
}
</script>

<style scoped>

</style>
