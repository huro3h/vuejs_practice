<template>
  <div>
    <form>
      <label for="name">氏名: </label>
      <input type="text" id="name" v-model="myName"/>
    </form>
    <div>{{ myName }} さん?</div>
    <button v-on:click="echoName">名前を確認</button>
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
  methods: {
    echoName: function(ev) {
      console.log(this.myName);
    }
    
  },
}
</script>

<style scoped>

</style>
