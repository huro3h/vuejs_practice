<template>
  <div>
    <div>
      <input type="text" placeholder="enter your email" v-model="email">
      <input type="text" placeholder="password" v-model="password">
    </div>
    <div>
      <button @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
const auth = {
  login: function(email, pass) {
    console.log(`email: ${email}`  + "\n" + `pass: ${pass}`);
  }
}

export default {
  name: "my-component.vue",
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      auth.login(this.email, this.password)
    }
  }
}
</script>

<style scoped>

</style>
