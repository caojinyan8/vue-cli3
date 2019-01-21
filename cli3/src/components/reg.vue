<template>
    <div class="reg">
        <header class="header">
    <div class="fix_nav">
        <div style="max-width:768px;margin:0 auto;background:#000000;position: relative;">
            <a class="nav-left back-icon" href="javascript:history.back();">返回</a>
            <div class="tit" style="font-size:18px;">会员注册</div>
        </div>
    </div>
</header>
<!-- <shophead :msg="msg"></shophead> -->
        <div class="maincontainer">
   <div class="container itemdetail mini-innner">
    <div class="row">
        <div class="col-md-12 tal mt20">
            <form  id="theForm"  name="theForm" class="form-signin"  action="/p/j_spring_security_check" method="GET" >
            <input type="hidden" id="returnUrl" name="returnUrl" value="http://m.legendshop.cn/p/orderDetails"/>
              
              <input v-model="username" name="j_username"   id="username" type="text" style="margin-bottom: -2px;-webkit-appearance:none; " class="form-control" placeholder="帐户名/手机号码" message="账号" required="true" autofocus=""  tabindex="1" >
              <br>
              <input v-model="passname" id="pwd" name="j_password" type="password" class="form-control" placeholder="请输入密码" message="密码" required="true" style="-webkit-appearance:none;" autocomplete="off"  tabindex="2" >
	          <label class="checkbox">
	                     <input id="_spring_security_remember_me" name="_spring_security_remember_me" type="checkbox"   tabindex="4" /> 记住我

	              </label>
                <div class="clear"></div>
                <div class="col-xs-5 p0" style="margin-left:60px;"><button type="button" class="btn btn-default btn-block" @click="tiao(username,passname)"  tabindex="6" >注 册</button></div>
            </form>
        </div>
     </div>
	</div>
</div>

    </div>
</template>
<script>
// import shophead from './shophead'

export default{
    data(){
        return{
            msg:"注册",
            username:"",
            passname:""
        }
    },
   methods:{
        tiao(username,passname){
            
            //  this.$router.push("/login")
            this.$http({
                url:'http://localhost:3000/users',
                // url:'http://www.liyangyf.com/ctrl/register.php',
                params:{
                    username:this.username,
                    passname:this.passname
                }
            }).then(res=>{
                console.log(res)
                switch(res.data){
                        case 1:
                        alert("注册成功");
                        location.href = "#/login"
						break;
                        case 0:
                        alert("用户名已存在")
						break;
						
                }
                    this.username='';
					this.passname='';
            })
        }
     }
   // ,
    //     components:{
    //                 shophead
    //                 },

}
</script>

