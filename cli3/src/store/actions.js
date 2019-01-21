import axios from 'axios';
import * as types from './types';

let actions={
  [types.VIEW_NAV]:({commit},payload)=>commit(types.VIEW_NAV,payload),
  [types.VIEW_FOOT]:({commit},payload)=>commit(types.VIEW_FOOT,payload),
  [types.VIEW_LOADING]:({commit},payload)=>commit(types.VIEW_LOADING,payload),
  [types.HOMELIST]:({commit},payload)=>{
      axios({
          url:payload,
      }).then(res=>commit(types.HOMELIST,res.data))
  },
  [types.HOMELIST2]:({commit},payload)=>{
    axios({
        url:payload,
    }).then(res=>commit(types.HOMELIST2,res.data))
},
[types.HOMELIST3]:({commit},payload)=>{
  axios({
      url:payload,
  }).then(res=>commit(types.HOMELIST3,res.data))
},
add:({commit,state},payload)=>{
    let arr=[...state.shopcar]
    let close=false
    arr.forEach((item,index)=>{
        if(item.id==payload.id){
            item.number++
            close=true
        }
    })
    if(!close){
        payload.number=1
        arr.push(payload)
    }
    commit(types.ADD,arr)
},
change:({commit,state},payload)=>{
    state.shopcar.forEach((item,index)=>{
        if(item.id==payload.id){
            item.number+=payload.num
        }
    })
    commit(types.CHANGE,[...state.shopcar])
},
remove:({commit,state},payload)=>{
    state.shopcar.forEach((item,index)=>{
        if(item.id==payload.id){
            state.shopcar.splice(index,1)
        }
    })
    commit(types.REMOVE,[...state.shopcar])
}

 
  
};
export default actions;