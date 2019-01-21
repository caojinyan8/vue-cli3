import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import axios from 'axios'
Vue.prototype.$http=axios
//拦截器
axios.interceptors.request.use(function (config) {
  vm.$data.bLoading=true
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  vm.$data.bLoading=false
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});



import "./assets/js/jquery.min.js"
import "./assets/js/global.js"
import "./assets/js/bootstrap.min.js"

import "animate.css"
import "./assets/css/bootstrap.css"
import "./assets/css/style.css"
import "./assets/css/member.css"
import "./assets/css/order3.css"
// import "./assets/js/template.js"

import loading from "./components/loading"
Vue.use(loading)


Vue.config.productionTip = false

// Vue.beforeEach((to,from,next)=>{

// })
var vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
