<template>
  <div id="app">
    <loading v-show='bLoading'></loading>
    <navbar v-show="bNav"></navbar>
  <router-view></router-view>
  <footbar v-show="bFoot"></footbar>
  </div>
</template>

<style>

</style>
<script>
import navbar from './components/navbar.vue'
import home from './components/home.vue'
import footbar from './components/footbar.vue'

import * as types from './store/types.js'
import {mapGetters} from 'vuex'

export default {
  components:{
    navbar,footbar,home

  },
  methods:{
checkRouterChange(to){
  // console.log("bianhuale",to.path)
  let path=to.path
  if(/login|reg|shopcarr|detailer/.test(path)){
    this.$store.dispatch(types.VIEW_NAV,false)
    this.$store.dispatch(types.VIEW_FOOT,false)

  }
 if(/home|detail/.test(path)){
    this.$store.dispatch(types.VIEW_NAV,true)
    this.$store.dispatch(types.VIEW_FOOT,true)
  }
  if(/list|user/.test(path)){
    this.$store.dispatch(types.VIEW_FOOT,true)
    this.$store.dispatch(types.VIEW_NAV,false)
  }
}
  },
  watch:{
    $route:{
      deep:true,
      immediate:true,
      handler:"checkRouterChange"
    }
  },
  computed:mapGetters([
    'bNav','bLoading', 'bFoot'
  ])
  
}
</script>

<style>
body{
  background:white
}
</style>


