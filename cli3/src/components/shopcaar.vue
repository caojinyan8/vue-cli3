<template>
  <div class="shopcaar">
    <header class="header header_1">
      <div class="fix_nav">
        <div class="nav_inner">
          <a class="nav-left back-icon" href="javascript:history.back();">返回</a>
          <div class="tit">购物车</div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row rowcar">
        <ul class="list-group">
          <!-- <li class="list-group-item text-primary">
            <div class="icheck pull-left mr5">
              <input type="checkbox" checked="checked" class="ids" prodStatus="1" itemkey>
              <label class="checkLabel">
                <span></span>
              </label>
            </div>
          </li>-->
          <li class="list-group-item hproduct clearfix" v-for="item in shopcar" :key="item.id">
            <div class="p-pic">
              <a href="javascript:;">
                <img class="img-responsive" :src="item.src">
              </a>
            </div>
            <div class="p-info">
              <a href="/views/663">
                <p class="p-title">{{item.title}}</p>
              </a>
              <p class="p-attr">
                <!-- <span>颜色：红色；</span></p> -->
              </p>
              <p class="p-origin">
                <a class="close p-close" @click="remove({id:item.id})">×</a>
                <em class="price">{{item.price}}</em>
              </p>
            </div>

            <div class="clearfix">
              <!-- <div class="pull-left mt5">
                <span class="gary">小计：</span>
                <em class="red productTotalPrice">¥179.00</em>
                 
              </div> -->
              <div class="btn-group btn-group-sm control-num">
               <div class="shps">
                <a @click="change({id:item.id,num:1})" class="btn btn-default">+</a>
                  <em>{{item.number}}</em> 
                <a @click="change({id:item.id,num:-1})" class="btn btn-default">- </a> 
              </div> 
               </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="fixed-foot">
      <div class="fixed_inner">
        <div class="pay-point">
          <div class="icheck pull-left mr10">
            <input type="checkbox" checked="checked" id="buy-sele-all" value="1">
            <label for="buy-sele-all">
              <span class="mt10"></span>全选
            </label>
          </div>
          <p>
            合计：
            <em class="red f22">
              ¥
              <span id="totalPrice">{{total}}</span>
            </em>
          </p>
        </div>
        <div class="buy-btn-fix">
          <a href="javascript:submitShopCart();" class="btn btn-danger btn-buy">去结算</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default{
  computed: mapGetters(["shopcar","total"]),
  methods: mapActions(["change", "remove"])
};
</script>

