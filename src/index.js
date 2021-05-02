import * as Vue from 'vue';
import MyComponent from './my-component.vue';

new Vue({
  el: '#are-list',
  components: { MyComponent },
  template: '<my-component></my-component>'
})
