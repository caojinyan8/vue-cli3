import * as types from './types'

let mutations={
    [types.VIEW_NAV]:(state,payload)=>state.bNav=payload,
    [types.VIEW_FOOT]:(state,payload)=>state.bFoot=payload,
    [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
    [types.HOMELIST]:(state,payload)=>state.homelist=payload,
    [types.HOMELIST2]:(state,payload)=>state.homelist2=payload,
    [types.HOMELIST3]:(state,payload)=>state.homelist3=payload,
    [types.ADD]:(state,payload)=>state.shopcar=payload,
    [types.CHANGE]:(state,payload)=>state.shopcar=payload,
    [types.REMOVE]:(state,payload)=>state.shopcar=payload


}
export default mutations