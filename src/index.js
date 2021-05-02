import * as Vue from 'vue';

// child component
let counterButton = Vue.extend({
  template: '<span>{{ counter }}個<button class="btn btn-primary" v-on:click="addToCart">追加</button></span>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    addToCart: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

// parent component
new Vue({
  el: '#areCounter',
  components: {
    'counter-button': counterButton
  },
  data: {
    total: 0,
    ares: [
      { name: 'hoge' },
      { name: 'fuga' }
    ]
  },
  methods: {
    incrementCartStatus: function () {
      this.total += 1
    }
  }
})
