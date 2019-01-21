
let getters={
    bNav:(state)=> state.bNav,
    bFoot:(state)=> state.bFoot,
    bLoading:(state)=> state.bLoading,
    homelist:(state)=> state.homelist,
    homelist2:(state)=> state.homelist2,
    homelist3:(state)=> state.homelist3,
    shopcar:(state)=>{
        return state.shopcar},
        total:(state)=>{
    let total=0
    if(state.shopcar.length>=1){
       for(var i=0;i<state.shopcar.length;i++){
        total+=(state.shopcar[i].price)*(state.shopcar[i].number)
       } 
       return total    
    }else{
            return 0
    }
}
}


export default getters