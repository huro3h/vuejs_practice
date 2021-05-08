<template>
  <div id="app">
    <div>
      <img src="./assets/logo.png">
    </div>
    <div>
      <router-link to="/">トップページ</router-link>
      <router-link to="/users">ユーザ一一覧ページ</router-link>
      <router-link to="/users/new?redirect=true">新規ユーザー登録</router-link>
<!--      <router-link to="/login" v-show="!Auth.loggedIn()">ログイン</router-link>-->
<!--      <router-link to="/logout" v-show="Auth.loggedIn()">ログアウト</router-link>-->
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
