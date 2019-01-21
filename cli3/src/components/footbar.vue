<template>
  <footer class="footer">
    <div class="foot-con">
      <ul class="foot-con_2">
        <router-link to="/home" active-class="active" tag="li">
          <a href="javascript:;">
            <i class="navIcon home"></i>
            <span class="text">首页</span>
          </a>
        </router-link>
        <router-link to="/detail" active-class="active" tag="li">
          <a href="javascript:;">
            <i class="navIcon sort"></i>
            <span class="text">分类</span>
          </a>
        </router-link>
        <router-link to="/shopcarr" active-class="active" tag="li">
          <a href="javascript:;">
            <i class="navIcon shop"></i>
            <span class="text">购物车</span>
          </a>
        </router-link>
        <router-link to="/user" active-class="active" tag="li">
          <a href="javascript:;">
            <i class="navIcon member"></i>
            <span class="text">我的</span>
          </a>
        </router-link>
        
		<!-- <li><a href="index.html" class="active">
			<i class="navIcon home"></i>
			<span class="text">首页</span>
		</a></li>
		<li><a href="category.html">
			<i class="navIcon sort"></i>
			<span class="text">分类</span>
		</a></li>
		<li><a href="shopcart.html">
			<i class="navIcon shop"></i>
			<span class="text">购物车</span>		
		</a></li>
		<li><a href="userhome.html" >
			<i class="navIcon member"></i>
			<span class="text">我的</span>
        </a></li> -->
      </ul>
    </div>
  </footer>
</template>
