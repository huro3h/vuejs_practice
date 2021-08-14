<template>
  <div>
    <form>
      <label for="name">氏名: </label>
      <input type="text" id="name" v-model.trim="myName"/>
      <br><br>
      <label for="type-a">A</label>
      <input type="radio" id="type-a" value="A" v-model="hogeType"/>
      <label for="type-b">B</label>
      <input type="radio" id="type-b" value="B" v-model="hogeType"/>
      <label for="type-c">C</label>
      <input type="radio" id="type-c" value="C" v-model="hogeType"/>
      <br><br>
      <label for="age-number">レベル: </label>
      <input type="text" id="age-number" v-model.number="ageNumber"/>
    </form>
    <br>
    <div>{{ myName }} さん? タイプ: {{ hogeType }}</div>
    <button v-on:click="echoProps">名前とタイプを確認</button>
  </div>
</template>

<script>
export default {
  name: "my-name",
  data() {
    return {
      myName: 'guest',
      hogeType: '',
      ageNumber: 0,
    }
  },
  methods: {
    echoProps: function(ev) {
      console.log(this.myName);
      console.log(this.hogeType ? this.hogeType : '未選択');
      console.log(this.ageNumber);
    }
  },
}
</script>

<style scoped>

</style>
