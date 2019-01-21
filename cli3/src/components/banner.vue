<template>
  <div class="container">
    <div class="row">
      <div id="slide">
        <div class="hd">
          <ul>
            <li class="on">1</li>
            <li class="on">2</li>
            <li class="on">3</li>
          </ul>
        </div>
        <div class="bd">
          <div class="tempWrap" style="overflow:hidden; position:relative;">
            <ul
              style="width: 3840px; position: relative; overflow: hidden; padding: 0px; margin: 0px; transition-duration: 200ms; transform: translateX(-768px);"
            >
              <li style="display: table-cell; vertical-align: top; width: 768px;">
                <a href="http://m.legendshop.cn/m_search/list?categoryId=36" target="_blank">
                  <img
                    src="../assets/img/0da8eb94-0159-4700-a6a5-bc007da5a853.jpg"
                    alt="女包"
                    ppsrc="../assets/img/0da8eb94-0159-4700-a6a5-bc007da5a853.jpg"
                  >
                </a>
              </li>
              <li style="display: table-cell; vertical-align: top; width: 768px;">
                <a href="http://m.legendshop.cn/m_search/list?categoryId=38" target="_blank">
                  <img
                    src="../assets/img/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg"
                    alt="女鞋"
                    ppsrc="../assets/img/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg"
                  >
                </a>
              </li>
              <li style="display: table-cell; vertical-align: top; width: 768px;">
                <a href="http://m.legendshop.cn/m_search/list?categoryId=38" target="_blank">
                  <img
                    src="../assets/img/efa1dc7b-1375-4876-acae-e344cae7d55c.jpg"
                    alt="服装"
                    ppsrc="../assets/img/efa1dc7b-1375-4876-acae-e344cae7d55c.jpg"
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TouchSlide from '../assets/js/TouchSlide.js'
export default {
  mounted(){
TouchSlide({
		slideCell:"#slide",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul",
		effect:"left",
		autoPlay:true,//自动播放
		autoPage:true, //自动分页
		switchLoad:"_src" //切换加载，真实图片路径为"_src"
	});
  }
}
</script>
