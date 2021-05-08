<template>
  <div>
    ここはユーザー詳細ページの予定???
    <div class="loading" v-if="loading">Now Loading...🥳</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="user">
      <h4>
        <p>ID: {{ user.id }}</p>
        <p>{{ user.name }} - {{ user.description }}</p>
      </h4>
    </div>
  </div>
</template>

<script>
// user一覧の元データ
import { usersDataList } from '@/usersDataList'
const getUser = function (userId, callback) {
  setTimeout(function () {
    let filteredUsers = usersDataList.filter(function (user) {
      return user.id === parseInt(userId, 10)
    })
    callback(null, filteredUsers && filteredUsers[0])
  }, 1500)
}

export default {
  name: "UserDetail",
  // 初期値をセット
  data: function () {
    return {
      loading: false,
      user: null,
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
    fetchData: function () {
      this.loading = true
      // this.$route.params.userId にURLパラメータの値をセット
      getUser(this.$route.params.userId, (function (err, user) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.user = user
        }
      }).bind(this))
    }
  }
}
</script>

<style scoped>

</style>
