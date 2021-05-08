<template>
  <div>
    <div class="sending" v-if="sending">Sending...🥳🥳</div>
    <div>
      <h3>新規ユーザー作成</h3>
      <div>
        <label>名前: </label>
        <input type="text" v-model="user.name">
      </div>
      <div>
        <label>説明文</label>
        <textarea v-model="user.description"></textarea>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <div><input type="button" @click="createUser" value="送信"></div>
    </div>
  </div>
</template>

<script>
// user一覧の元データ
import { usersDataList } from '@/usersDataList'
const postUser = function (params, callback) {
    setTimeout(function () {
      // idは追加されるごとに自動的にincrementされていく
      params.id = usersDataList.length + 1
      usersDataList.push(params)
      callback(null, params)
    }, 1000)
}

export default {
  name: "UserCreate.vue",
  data: function () {
    return {
      sending: false,
      user: this.defaultUser(),
      error: null
    }
  },
  created: function () {
  },
  methods: {
    defaultUser: function () {
      return {
        name: '',
        description: ''
      }
    },
    createUser: function () {
      // 入力パラメータのバリデーション
      // TODO: 1つしか返せない
      if (this.user.name.trim() === '') {
        return this.error = 'Nameは必須です'
      }
      if (this.user.description.trim() === '') {
        return this.error = 'Descriptionは必須です'
      }

      postUser(this.user, (function (err, user) {
        this.sending = false
        if (err) {
          this.error = err.toString()
        } else {
          this.error = null
          // デフォルトでフォームをリセット
          this.user = this.defaultUser()
          console.log('新規ユーザーが登録されましたね！');
          // ユーザー一案ページに遷移
          this.$router.push('/users')
        }
      }).bind(this))
    },
  }
}
</script>

<style scoped>

</style>
