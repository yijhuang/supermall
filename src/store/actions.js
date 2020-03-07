export default {
    addCart:function(context,payload){
        let oldProduct = null;

        return new Promise((resolve,reject)=>{
            oldProduct = context.state.productList.find((item)=>{return item.iid === payload.iid});
            if(oldProduct){
                context.commit('addCount',oldProduct);
                resolve('商品数量+1');
            }else{
                context.commit('addList',payload);
                resolve('添加新商品到购物车成功');
            }
        })
    }
}