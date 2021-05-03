import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      // name: 'Top',
      component: {
        template: '<div>Topページですね</div>'
      }
    },
    {
      path: '/users',
      // name: 'Top',
      component: {
        template: '<div>ユーザー一覧ページですね</div>'
      }
    },
    }
  ]
})
