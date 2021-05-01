import * as Vue from 'vue';

Vue.component('hoge-desc', {
  props: {
    hogeName : {
      type: String
    }
  },
  template: '<p>{{ hogeName }} = foo です</p>'
})

new Vue({
  el: '#app',
  data: { myHoge: 'foo' }
})

// window.vm = vm;
