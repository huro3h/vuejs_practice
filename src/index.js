import * as Vue from 'vue';

Vue.component('hoge-name', {
  props: {
    hogeItem: {
      type: Object,
      required: true
    }
  },
  template: '<li>{{hogeItem.name}}</li>'
})

new Vue({
  el: '#app-component',
  data: {
    hogeItems: [
      { name: 'hoge1' },
      { name: 'hoge2' }
    ]
  }
})
