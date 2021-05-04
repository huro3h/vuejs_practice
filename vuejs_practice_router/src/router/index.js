import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Users from '@/components/Users'

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
      component: Users
    },
    {
      // ユーザID部分はコロンではじまるパターンマッチング
      path: '/user/:userId',
      name: 'UserIds',
      component: {
        // $route.paramsでパラメータを参照可能
        template: '<div>ユーザーID {{ $route.params.userId }} ですね</div>'
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
