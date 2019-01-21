import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import home from './components/home.vue'
import detail from './components/detail.vue'
import error from './components/error.vue'
import reg from './components/reg.vue'
import login from './components/login.vue'
import user from './components/user.vue'
import shopcarr from './components/shopcarr.vue'
import detailer from"./components/detailer.vue"
import list from"./components/list.vue"
let routes=[
  {path:'/home',component:home},
  {name:"detailer",path:"/detailer/:id",component:detailer},
  {path:'/detail',component:detail},
  {path:'/reg',component:reg},
  {path:'/login',component:login},
  {path:'/user',component:user},
  {path:'/shopcarr',component:shopcarr},
  {path:'/',redirect:'home'},
  {path:'/list',component:list},
  {path:'*',component:error}
]
export default new Router({
  routes
})
