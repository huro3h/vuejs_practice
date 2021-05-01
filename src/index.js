import * as Vue from 'vue';

Vue.component('hoge-list-title', {
  template: '<h4>test_title</h4>'
})

const vm = new Vue({
  el: '#hoge-list'
})

window.vm = vm;
