<template>
    <div class="shopcarr">
        <!-- <shophead :msg="msg"></shophead>-->
        <shopcaar v-show='true'></shopcaar> 
    </div>
</template>
<script>
//import shophead from './shophead'
import shopcaar from './shopcaar'
export default {
    name:'shopcarr',
    data(){
        return {
            msg:'购物车'
        }
    },
    components:{
     shopcaar
    }
}
</script>

