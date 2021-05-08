import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Users from '@/components/Users'
import UserDetail from '@/components/UserDetail'
import UserCreate from '@/components/UserCreate'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: {
        template: '<div>Topページですね</div>'
      }
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/users/new',
      component: UserCreate,
      beforeEnter: function (to, from, next) {
        // 認証されていない時はloginページへ
        if (!Auth.loggedIn()) {
          next({
            path: 'login',
            query: { redirect: to.fullPath }
          })
        } else {
          // 認証済みであれば、新規ユーザー登録ページへ
          next()
        }
      }
    },
    {
      // ユーザID部分はコロンではじまるパターンマッチング
      path: '/users/:userId',
      // name: 'UserIds',
      component: UserDetail,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/logout',
      beforeEnter: function (to, from, next) {
        Auth.logout()
        next('/')
      }
    },
    {
      path: '*',
      component: {
        template: '<div>404 Not Foundですね</div>'
      }
    }
  ]
})
