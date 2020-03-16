// 入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource)
import App from './App.vue'
// 样式需要单独引入
import 'mint-ui/lib/style.css'
import './lib/css/mui.css'
import './lib/css/icons-extra.css'

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import router from './router'


var vm = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})