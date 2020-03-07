<template>
    <div class="bottom-bar">
        <div class="left">
            <div class="bottom-item service">
                <i class="icon"></i>
                客服
            </div>
            <div class="bottom-item store">
                <i class="icon"></i>
                店铺
            </div>
            <div class="bottom-item collect">
                <i class="icon"></i>
                收藏
            </div>
        </div>
        <div class="right">
            <div class="bottom-item cart" @click="addCart">加入购物车</div>
            <div class="bottom-item bought">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailBottomBar',
    methods:{
        addCart:function(){
            this.$emit('addCart');
        }
    }
}
</script>
<style scoped>
    .bottom-bar{
        height:49px;
        width:100%;
        background-color:rgb(255, 254, 254);
        position: relative;
        z-index:1;

        display:flex;
        text-align:center;
    }

    .left,.right{
        flex:1;
        display:flex;
    }
    /* left style */
    /* bottom-item style */
    .left .bottom-item{
        flex:1;
        margin-top:1px;
        font-size:0.8rem;
    }
    .bottom-item .icon{
        display: block;
        width: 22px;
        height:22px;
        margin:3px auto;
        background:url('~assets/img/detail/detail_bottom.png') 0 0/100%;
    }
    .service .icon{
        background-position: 0 -52px;
    }
    .store .icon{
        background-position: 0 52px;
    }
    /* right style */
    .right .bottom-item{
        flex:1;
        text-align:center;
        line-height: 49px;
    }
    .right .cart{
        background-color:rgb(255,221,16);  
    }
    .right .bought{
        background-color:var(--color-tint);
        color:#fff;

    }
</style>