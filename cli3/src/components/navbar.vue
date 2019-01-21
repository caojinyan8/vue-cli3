<template>
  <header class="header">
    <div class="fix_nav">
      <div
        style="max-width:768px;margin:0 auto;height: 44px;position: relative;background:#000000;"
      >
        <form action="/m_search/list" method="get" id="searchform" name="searchform">
          <div class="navbar-search left-search">
            <input
              type="text"
              id="keyword"
              name="keyword"
              v-model="sou"
              @input="sou"
              value
              placeholder="搜索商品"
              class="form-control"
            >
          </div>
          <div class="nav-right">
            <input
              type="button"
              value="搜索"
              @click="searchproduct"
              class="img-responsive"
              style="text-align:center;background:#ccc;border-radius: 5px;border:none;height:34px;vertical-align:middle;clear:both;padding:0px;width:42px;"
            >
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
		sou:""
	}
  },
  mounted() {
    //console.log($)
    $(document).ready(function() {
      $("#slide img").each(function() {
        var img_src = $(this).attr("_src");
        $(this).attr("src", img_src);
      });
    });
  },
  methods: {
    searchproduct() {
      //var keyword = document.getElementById("keyword").value;
      if (this.sou == undefined || this.sou == null || this.sou == "") {
        alert("请输入搜索关键字！");
        return false;
      }else{
		  
	  }
      //    document.getElementById("searchform").submit();
    }
  }
};

// function searchproduct(){
// 	   var keyword = document.getElementById("keyword").value;
// 	   if(keyword == undefined || keyword==null ||keyword ==""){
// 	     alert("请输入搜索关键字！");
// 	     return false;
// 	   }
// 	   document.getElementById("searchform").submit();
// 	}
</script>
