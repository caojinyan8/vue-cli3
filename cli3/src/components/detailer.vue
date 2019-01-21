<template>

<div>
    
    <div class="fix_nav">
        <div style="max-width:768px;margin:0 auto;background:#000000;position: relative;">
            <a class="nav-left back-icon" href="javascript:history.back();">返回</a>
            <div class="tit" style="font-size:18px;">商品详情</div>
        </div>
    </div>

<!-- <shophead :msg="msg"></shophead> -->
<input type="hidden" id="prodId" value="663"/>
<input id="currSkuId" value="" type="hidden"/>
<div class="container">
    <div class="row white-bg">
        <div id="slide"> 
            <div class="hd">
               
            </div>
            <div class="bd">
                <div class="tempWrap" style="overflow:hidden; position:relative;">
                	<ul>
                        <li>
                        		<a href="#"><img :src="detailer.src"></a>
                        	</li>
                        </ul>
               </div>
            </div>
        </div>
    </div>
    <div class="row gary-bg">
         <div class="white-bg p10 details_con">
         <h1 class="item-name" id="prodName">{{detailer.title}}</h1>
         <ul>
			<li>
				<label>商城价格：</label>
				<span class="price"><span class="price" id="prodCash">{{detailer.price}}</span></span>
			</li>
			  <li>
				<label>数量：</label>
				<div class="count_div" style="height: 30px; width: 130px;">
					<a href="javascript:void(0);" class="minus" ></a>
					  <input type="text" class="count" value="1" id="prodCount" readonly="readonly"/>
					<a href="javascript:void(0);" class="add" ></a>
				</div>
			</li>
			</ul>
		</div>
        <div id="goodsContent" class="goods-content white-bg">
			
            <div class="hd hd_fav">
                <ul>
                    <li class="on">图文详情</li>
                    <li class="">规格参数</li>
                    <li class="">评价(0)</li>
                </ul>
            </div>
			
            <div class="tempWrap" style="overflow:hidden; position:relative;">
            <div class="bd">
                <ul style="display: table-cell; vertical-align: top; max-width: 768px;width: 100%;" class="property">
                    <div class="prop-area">
                    	<img :src="detailer.src"/>
						
						</div>
                </ul>
                <ul class="txt-imgs" style="display: table-cell; vertical-align: top; max-width: 768px;width: 100%;">
                	<div class="desc-area" style="padding: 0px 10px 0 10px;">
	                <li style="height:30px;">
	                	<!-- <div id="ajax_loading" style="margin: 10px  auto 15px;text-align:center;"> <img src="../assets/images/loading.gif" style="width: auto; display: block;  margin: auto;"></div> -->
	                </li>
	                </div>
                </ul>
                <ul style="display: table-cell; vertical-align: top; max-width: 768px;width: 100%;" class="appraise" rel="1" status="1">
                	<div style="height:30px;">
	                	<!-- <div id="ajax_loading" style="margin: 10px  auto 15px;text-align:center;"> <img src="../assets/images/loading.gif" style="width: auto; display: block;  margin: auto;"></div> -->
	                </div>
                     <div class="wap_page" style="display: none;" onclick="next_comments(this)"><span>下一页</span></div>
                </ul>
            </div>
            </div>
        </div>
    </div>
</div>

<div class="fixed-foot">
	<div class="fixed_inner">
		<a class="btn-fav" href="javascript:void(0);" onclick="addInterest(this,'663');">
		<i class="i-fav"></i><span>收藏</span>
		</a>
		<a class="cart-wrap" href="/shopcart">
			<i class="i-cart"></i>
			<span>购物车</span>
			<span class="add-num" id="totalNum">0</span>
		</a>
		<div class="buy-btn-fix">
		    <b @click='add(detailer)'><router-link to="/shopcarr" class="btn btn-info btn-cart">加入购物车</router-link></b>
		    <a class="btn btn-danger btn-buy" onclick="buyNow();" href="javascript:void(0);">立即购买</a>
		</div>
	</div>
</div>
</div>
</template>

<style>
@import url("../assets/css/productDetail.css");
.details_con li .tb-out-of-stock{
border: 1px dashed #bbb;
color:#bbb;
cursor: not-allowed;
}
.no-selected{
background: #ffe8e8 none repeat scroll 0 0;
border: 2px solid #be0106;
margin: -1px;
}
</style>

<script>
import shophead from './shophead'
import {mapActions} from 'vuex';
export default {
		data(){
			return{
				msg:'商品详细',
				detailer:{}
			}
		},
            methods:{
                fann(){
                    this.$router.go(-1)
                }
			},
			
			mounted(){
				console.log(this.$route.params)
				console.log(this.$route.query)
				let url=this.$route.query.url
				let id=this.$route.params.id
				this.$http({
					url:`/data/${url}.json`
				}).then((res)=>{this.detailer=res.data[id]
					console.log(res.data)}
				)
			 },
			 components:{
				  shophead
			 },
			 methods:mapActions([
				 'add'
			 ])
}
</script>


