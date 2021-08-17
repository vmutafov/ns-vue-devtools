import Vue from 'nativescript-vue'

import Home from './components/Home'

import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools)
Vue.config.silent = false;

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
