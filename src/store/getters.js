export default {
    productCount:function(state){
        return state.productList.reduce((total=0,item)=>{
            return total+item.count;
        },0);
    },
    productList:function(state){
        return state.productList;
    },
    checkPrice:function(state){
        return state.productList.filter(item=>{
            return item.isCheck}).reduce((total,item)=>{
                return item.price*item.count + total;
            },0).toFixed(2);
    },
    checkCount:function(state){
        return state.productList.filter(item=>{
            return item.isCheck;
        }).reduce((total,item)=>{
            return total+item.count;
        },0);
    },
    selectAllCheck:function(state){
        if(state.productList.length == 0){
            return false;
        }
        return !state.productList.find(item=>{
            return !item.isCheck;
        })
    }    
}