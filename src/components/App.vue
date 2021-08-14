<template>
  <div>
    <my-name :huga="hugaString"></my-name>
    <dog-form></dog-form>
  </div>
</template>

<script>
import MyName from "./MyName";
import DogForm from "./DogForm";

export default {
  name: "App",
  data() {
    return {
      hugaString: 'ふが'
    }
  },
  components: {
    'my-name': MyName,
    'dog-form': DogForm,
  },
  
}
</script>

<style scoped>
</style>
