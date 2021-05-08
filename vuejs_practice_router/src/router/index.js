import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Users from '@/components/Users'
import UserDetail from '@/components/UserDetail'
import UserCreate from '@/components/UserCreate'

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
    },
    {
      // ユーザID部分はコロンではじまるパターンマッチング
      path: '/users/:userId',
      // name: 'UserIds',
      component: UserDetail,
    },
    {
      path: '*',
      component: {
        template: '<div>404 Not Foundですね</div>'
      }
    }
  ]
})
