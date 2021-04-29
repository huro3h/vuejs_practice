import * as Vue from 'vue';

const items = [
  {
    name: 'apple',
    price: 133,
    quantity: 13
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
  el: '#practice-app',
  data: function () {
    return {
      count: 0,
      timeId: null
    }
  },
  created: function () {
    console.log('created!');

    let that = this
    // 参照可能
    console.log(this.count);

    // DOM要素がまだ紐付いていない
    console.log(this.$el);

    // タイマー
    this.timeId = setInterval(function () {
      that.count += 1
    }, 2000)
  },
  mounted: function () {
    console.log('mounted?');

    // ここで要素が紐づく
    console.log(this.$el);
  },
  beforeDestroy: function () {
    console.log('beforeDestroy..');
    console.log('タイマーの後始末...');
    clearInterval(this.timeId);
  }
});

window.vm = vm;


// const vm = new Vue({
//   el: '#app',
//   data: {
//     items: items,
//   },
//   filters: {
//     numberWithDelimiter: function (val) {
//       if (!val) {
//         return '0';
//       }
//       return val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
//     }
//   },
//   computed: {
//     totalPrice: function() {
//       return this.items.reduce(function (sum, item) {
//         return sum + (item.price * item.quantity)
//       }, 0)
//     },
//     totalPriceWithTax: function () {
//       return Math.floor(this.totalPrice * 1.1)
//     },
//     canBuy: function () {
//       return this.totalPrice >= 5000
//     },
//     errorMessageStyle: function () {
//       return {
//         border: this.canBuy ? '' : '2px solid red',
//         color: this.canBuy ? '' : 'red',
//         padding: this.canBuy ? '' : '5px',
//         "border-radius": this.canBuy ? '' : '5px',
//       }
//     }
//   }
// });
//
// window.vm = vm

