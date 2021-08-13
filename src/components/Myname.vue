<template>
  <div>
    <form>
      <label for="name">氏名: </label>
      <input type="text" id="name" v-model="myName"/>
    </form>
    <div>{{ myName }} さん?</div>
  </div>
</template>

<script>
export default {
  name: "my-name",
  data() {
    return {
      myName: 'guest'
    }
  },
}
</script>

<style scoped>

</style>
