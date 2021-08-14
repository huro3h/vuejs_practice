<template>
  <div>
    <my-name></my-name>
    <dog-form></dog-form>
  </div>
</template>

<script>
import MyName from "./MyName";
import DogForm from "./DogForm";

export default {
  name: "App",
  components: {
    'my-name': MyName,
    'dog-form': DogForm,
  },
  
}
</script>

<style scoped>
</style>
