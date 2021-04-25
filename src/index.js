import * as Vue from 'vue';

const items = [
  {
    name: 'apple',
    price: 133,
    quantity: 1
  },
  {
    name: 'orange',
    price: 34,
    quantity: 6
  },
  {
    name: 'grape',
    price: 198,
    quantity: 6
  }
]

const vm = new Vue({
  el: '#app',
  data: {
    items: items
  }
});

vm.$mount(el);

// $watch 変更を監視

// vm.$watch(function () {
//   return this.items[0].quantity
// }, function (quantity) {
//   console.log(qquantity);
// })
