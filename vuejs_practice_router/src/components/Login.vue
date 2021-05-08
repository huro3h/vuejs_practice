<template>
  <div>
    <h3>Login</h3>
    <p v-if="$route.query.redirect">
      ログインしてください
    </p>
    <form @submit.prevent="login">
      <label><input v-model="email" placeholder="email"></label>
      <label><input v-model="pass" placeholder="password" type="password"></label>
      <br>
      <button type="submit">ログイン</button>
      <p v-if="error" class="error">ログインに失敗しましたね..</p>
    </form>
  </div>
</template>

<script>
export const Auth = {
  login: function (email, pass, cb) {
    // ダミーデータを使った疑似ログイン
    setTimeout(function () {
      if (email === 'vue@example.com' && pass === 'vue') {
        // ログイン成功時はローカルストレージにtokenを保存
        localStorage.token = Math.random().toString(36).substring(7)
        if (cb) { cb(true) }
      } else {
        if (cb) { cb(false) }
      }
    }, 400)
  },

  logout: function () {
    delete localStorage.token
  },

  loggedIn: function () {
    // ローカルストレージにtokenがあればログイン状態とみなす
    return !!localStorage.token
  }
}

export default {
  name: "Login",
  data: function () {
    return {
      email: 'vue@example.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login: function () {
      Auth.login(this.email, this.pass, (function (loggedIn) {
        if (!loggedIn) {
          this.error = true
        } else {
          // redirectパラメータがついている時は指定されたパスに遷移
          this.$router.replace(this.$route.query.redirect || '/')
        }
      }).bind(this))
    }
  }
}
</script>

<style scoped>

</style>
