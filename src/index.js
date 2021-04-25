console.log('Hello World!');

import { Vue } from "vue/dist/vue"

const vm = new Vue({
  data: {
    items: items
  }
}).$mount('#app')

const items = [
  {
    name: 'hoge',
    price: 133,
    quantity: 1
  },
  {
    name: 'huga',
    price: 34,
    quantity: 12
  },
  {
    name: 'foo',
    price: 998,
    quantity: 65
  }
]

// $watch 変更を監視

// vm.$watch(function () {
//   return this.items[0].quantity
// }, function (quantity) {
//   console.log(qquantity);
// })
