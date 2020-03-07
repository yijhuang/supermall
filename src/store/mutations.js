export default {
    addCount:function(state,payload){
        payload.count ++;
    },
    addList:function(state,payload){
        payload.count = 1;
        payload.isCheck = true;
        state.productList.push(payload);
    },
    changeCheck:function(state,payload){
        payload.isCheck = ! payload.isCheck;
    },
    selectAll:function(state){
        if(this.getters.selectAllCheck){
            state.productList.forEach(item=>item.isCheck=false);
        }else{
            state.productList.forEach(item=>item.isCheck=true);
        }
    }
}