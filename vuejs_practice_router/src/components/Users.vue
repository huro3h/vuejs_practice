<template>
  <div id="user-list">
    ユーザー一覧ページですよね? ここ
    <div class="loading" v-if="loading">Now Loading...</div>
    <div class="error" v-if="error">{{ error }}</div>
    <div v-for="user in users" :key="user.id">
      <h3>ID: {{ user.id }}</h3>
      <h3>Name: {{ user.name }}</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: "Users",
  data: function () {
    return {
      loading: false,
      users: function () { return [] }, // 初期値の空配列
      error: null
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function() {
      this.loading = true
      // 取得したデータの結果をusersに格納
      // Function.prototype.bindはthisのスコープを渡すのに利用
      getUsers((function (err, users) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }).bind(this))
    }
  }
}

// HTML上のDOM要素のidを指定
const getUsers = function (callback) {
  setTimeout(function () {
    callback(null, [
      {
        id: 1,
        name: 'Taro Hoge'
      },
      {
        id: 2,
        name: 'Takashi Hoge'
      },
    ])
  }, 2000)
}
</script>

<style scoped>

</style>
