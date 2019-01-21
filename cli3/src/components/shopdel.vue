<template>
  <div class="container">
    <div class="row">
      <!--产品块-->
      <div class="tb_box">
        <h2 class="tab_tit">
          <a class="more" href="javascript:;">更多</a>
         {{datanames}}
        </h2>
        <ul class="tb_type tb_type_even clearfix">
        <li v-for="item in list" :key="item.id">
          <router-link class="th_link" :to="'/detailer/'+item.id+'?url='+url">
            <img
              class="tb_pic" :src="item.src"
              style="width:100%;border-right:1px #dadada solid"
            >
          </router-link>
          
          </li>
        </ul>
      </div>     
    </div>
  </div>
</template>
<script>
export default {
  props: ["list","datanames","url"]
};
</script>

