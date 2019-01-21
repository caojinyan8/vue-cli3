<template>
    <div class="home">
        <banner></banner>
        <naver></naver>
        <shopdel :list="homelist" :datanames="datanames" :url="'homelist'"></shopdel>
        <shopdel :list="homelist2" :datanames="datanames1" :url="'homelist2'"></shopdel>
        <shopdel :list="homelist3" :datanames="datanames2" :url="'homelist3'"></shopdel>

    </div>
</template>
<script>
import banner from './banner.vue'
import naver from './naver.vue'
import shopdel from './shopdel.vue'

import {mapGetters} from 'vuex'

export default {
  components:{
   banner,naver,shopdel
  },
  data(){
      return {
        datanames:"礼品箱包",

          datanames1:"服饰鞋帽",

          datanames2:"数码办公",

      }
  },
  computed:mapGetters([
'homelist','homelist2','homelist3'
  ]),
  mounted(){
      let url =`/data/homelist.json`;
      this.$store.dispatch('HOMELIST',url)
    //   this.$http({
    //       url:url,
    //   }).then(res=>this.list=res.data)

        let url1 =`/data/homelist2.json`;
        this.$store.dispatch('HOMELIST2',url1)

    //   this.$http({
    //       url:url1,
    //   }).then(res=>this.list1=res.data)

         let url2=`/data/homelist3.json`;
               this.$store.dispatch('HOMELIST3',url2)

    //   this.$http({
    //       url:url2,
    //   }).then(res=>this.list2=res.data)

  
  }
}
</script>
