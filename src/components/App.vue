<template>
  <div>
    <my-name></my-name>
    <dog-form></dog-form>
  </div>
</template>

<script>
import Myname from "./Myname";
import DogForm from "./DogForm";

export default {
  name: "App",
  components: {
    'my-name': Myname,
    'dog-form': DogForm,
  },
  
}
</script>

<style scoped>
</style>
