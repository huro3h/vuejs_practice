<template>
  <div>
    <my-name :huga="hugaString"></my-name>
    <!--    <dog-form></dog-form>-->
    <!--    v-on:(子から送られてくるイベント名)-->
    <my-counter-button :counter="10" v-on:increment="onincrement"></my-counter-button>
    {{ AreCounter }}
  </div>
</template>

<script>
import MyName from "./MyName";
import DogForm from "./DogForm";
import MyCounterButton from "./MyCounterButton";

export default {
  name: "App",
  data() {
    return {
      hugaString: 'ふが',
      AreCounter: 0,
    }
  },
  components: {
    'my-name': MyName,
    // 'dog-form': DogForm,
    'my-counter-button': MyCounterButton,
  },
  methods: {
    onincrement(e) {
      this.AreCounter += e
    }
  }
}
</script>

<style scoped>
</style>
