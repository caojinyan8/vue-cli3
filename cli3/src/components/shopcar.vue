<template>
  <div class="shopcar">
    <div class="fanhui_cou">
      <div class="fanhui_1"></div>
      <div class="fanhui_ding">顶部</div>
    </div>
    <header class="header_1">
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
            </div>CJY的软件
          </li> -->
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
              <span id="totalPrice">179.00</span>
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


</script>

