<template>
  <div>
    <div class="fanhui_cou">
      <div class="fanhui_1"></div>
      <div class="fanhui_ding">顶部</div>
    </div>
    <header class="header">
      <div class="fix_nav">
        <div class="nav_inner">
          <a class="nav-left back-icon" href="javascript:;" @click="fan">返回</a>
          <div class="tit">产品列表</div>
        </div>
      </div>
    </header>

    <div class="container" id="container2">
      <div class="row">
        <ul class="mod-filter clearfix">
          <div class="white-bg_2 bb1">
            <li id="default" class="active">
              <a title="默认排序" href="javascript:void(0);">默认</a>
            </li>
            <li id="buys">
              <a title="点击按销量从高到低排序" href="javascript:void(0);">
                销量
                <i class="icon_sort"></i>
              </a>
            </li>
            <li id="comments">
              <a title="点击按评论数从高到低排序" href="javascript:void(0);">
                评论数
                <i class="icon_sort"></i>
              </a>
            </li>
            <li id="cash">
              <a title="点击按价格从高到低排序" href="javascript:void(0);">
                价格
                <i class="icon_sort"></i>
              </a>
            </li>
          </div>
        </ul>
        <!-- <router-link to="./detail"></router-link> -->
        <div class="item-list" id="container" rel="2" status="0">
          <input type="hidden" id="ListTotal" value="1">
          <ul >
            <li v-for="item in list" :key="item.id">
              <!-- <router-link :to="{name:'detailer',params:{id:item.id},query:item}"> -->
                <a href="javascript:;"></a>
                <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                  <div class="p-pic">
                    <img
                      style="max-height:100px;margin:auto;"
                      class="img-responsive"
                      :src="item.src"
                    >
                  </div>
                  <div class="p-info">
                    <p class="p-title">{{item.title}}</p>
                    <p class="p-origin">
                      <em class="price">{{item.price}}</em>
                    </p>
                    <p class="mb0">
                      <del class="old-price">{{item.oldprice}}</del>
                    </p>
                  </div>
                </div>
              <!-- </router-link> -->
            </li>
          </ul>
        </div>

        <div
          id="ajax_loading"
          style="display:none;width:300px;margin: 10px  auto 15px;text-align:center;"
        >
          <img src="images/loading.gif">
        </div>
        <form action="/m_search/prodlist" method="post" id="list_form">
          <input type="hidden" id="curPageNO" name="curPageNO" value>
          <input type="hidden" id="categoryId" name="categoryId" value="36">
          <input type="hidden" id="orders" name="orders" value>
          <input type="hidden" id="hasProd" name="hasProd" value>
          <input type="hidden" id="keyword" name="keyword" value>
          <input type="hidden" id="prop" name="prop" value>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    fan() {
      this.$router.push("/detail")
    }
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    let url = `/data/detaillist.json`;
    this.$http({
      url: url
    }).then((res) =>{
      this.list = res.data
     
      });
  }
};
</script>
