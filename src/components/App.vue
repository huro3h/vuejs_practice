<template>
  <div>
    <my-name :huga="hugaString"></my-name>
    <!--    <dog-form></dog-form>-->
    <my-counter :counter="AreCounter"></my-counter>
  </div>
</template>

<script>
import MyName from "./MyName";
import DogForm from "./DogForm";
import MyCounter from "./MyCounter";

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
    'my-counter': MyCounter,
  },
  
}
</script>

<style scoped>
</style>
