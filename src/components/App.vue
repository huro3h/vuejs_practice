<template>
  <div>
    <my-name :huga="hugaString"></my-name>
    <!--<dog-form></dog-form>-->
    <!--v-on:(子から送られてくるイベント名)-->
    <my-counter-button counter="10" v-on:increment="onincrement"></my-counter-button>
    {{ AreCounter }}
    <br>
    <my-hello>要素がある
      <template v-slot:aaaa>1</template>
      <!--v-slot: の省略記法-->
      <template #bbbb>2</template>
      <template #cccc>3</template>
    </my-hello>
    <my-hello>
      <!--名前付きスロット-->
      <template v-slot:aaaa></template>
      <!--v-slot: の省略記法-->
      <template #bbbb></template>
      <template #cccc></template>
    </my-hello>
  </div>
</template>

<script>
import MyName from "./MyName";
import DogForm from "./DogForm";
import MyCounterButton from "./MyCounterButton";
import MyHello from "./MyHello";

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
    'my-hello': MyHello,
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
