<template>
  <div>
    <p>DogForm</p>
    <form>
      <label for="toggle-show">ON / OFF ボタン</label>
      <input type="checkbox" id="toggle-show" v-model="panelToggle">
    </form>
    <div id="panel" v-if="panelToggle">
      {{ shownMessage }}
    </div>
    <div v-else>
      見えてないよ
    </div>
    <button v-on:click="updateMessage">3秒後にメッセージ変えるボタン</button>
  </div>
</template>

<script>
export default {
  name: "DogForm.vue",
  data() {
    return {
      panelToggle: true,
      shownMessage: '見えてます?'
    }
  },
  methods: {
    updateMessage: function() {
      setTimeout(() => {
        this.shownMessage = '3秒後'
      }, 3000);
    }
  }
}
</script>

<style scoped>

</style>
