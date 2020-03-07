<template>
    <div class="shop-info">
        <div class='shop-title'>
            <img :src="shopInfo.shopLogo">
            <span>{{shopInfo.shopName}}</span>
        </div>
        <div class="shop-body">
           <div class="shop-sells">
                <div class="shop-num">{{shopInfo.cSells | getSells}}</div>
                总销量
            </div>
            <div class="shop-goods">
                <div class='shop-num'>{{shopInfo.cGoods}}</div>
                全部宝贝
            </div>
            <div class='shop-score'>
                <table>
                    <tr v-for="(item,index) in shopInfo.score" :key="index">
                        <td>{{item.name}}</td>
                        <td :class="item.isBetter?'high-score':'low-score'">{{item.score}}</td>                        
                        <td class="high-text" v-if="item.isBetter">高</td>
                        <td class="low-text" v-else>低</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-url">
            <button>进店逛逛</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'detailShopInfo',
    props:{
        shopInfo:{
            type:Object,
            default:()=>{
               return {};
            }
        }
    },
    filters:{
        getSells:function(cSells){
            let sells = cSells;
            if(sells>=10000){
                sells = (cSells/10000).toFixed(1) + '万';
            }
            return sells;
        }
    }
}
</script>

<style scoped>
.shop-info{
    margin:0 5px;
    border-bottom:3px solid #eee;
    padding-bottom: 15px;


}
/* title style*/
.shop-title{
    height:50px;
    line-height: 50px;
    margin:20px 10px;
}
.shop-title img{
    width: 50px;
    /* height: 100px; */
    border-radius: 100px;
    
}
.shop-title span{
    position: relative;
    top: -20px;
    padding-left:10px;
}
/*shop-body style*/
.shop-body{
    display: flex;
    font-size:0.8rem;
    text-align:center;
}
.shop-num{
    font-size: 1rem;
}
.shop-sells{
    flex:1;
    margin:auto 0;
}
.shop-goods{
    flex:1;
    border-right:1px solid #eee;
    margin:auto 0;
}
.shop-score{
    flex:2;

}
.shop-score table{
    margin:0 auto;
}
.shop-score td{
    padding:2px
}
/* high style */
.high-score{
    color:#f00;
}
.high-text{
    color:#fff;
    background-color:#f00;
}
/* shop-url style */
.shop-url{
    text-align:center;
    margin:10px 0;
}
.shop-url button{
    background-color: #eee;
    border-width: 0px;
    padding:5px 40px;
    font-size:0.8rem;
    border-radius: 5px;
}
/*low style */
.low-score{
    color:#0f0;
}
.low-text{
    color:#fff;
    background-color:#0f0;
}
</style>