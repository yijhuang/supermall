<template>
    <div class="goods-show-item" @click="jumpTo">
        <img v-lazy="imageUrl" @load="imgLoad">
        <div class='goods-info'>
            <p>{{goodsItemData.title}}</p>
            <span class="price">{{goodsItemData.price}}</span><span class="cfav">{{goodsItemData.cfav}}</span>
        </div>
    </div>
</template>
<script>

export default {
    name: "GoodsListItem",
    props: {
      goodsItemData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
        imgLoad:function(){
            this.$bus.$emit('imgLoad');
        },
        jumpTo:function(){
            this.$router.push({
                path:'details',
                query:{
                    id:this.goodsItemData.iid,
                }
            })
        }
    },
    computed:{
        imageUrl:function(){
            return this.goodsItemData.image||this.goodsItemData.showLarge.img;
        }
    }
}
</script>
<style scoped>
.goods-show-item{
    width:40%;
    flex:40%;
    padding:3px;
}
.goods-show-item img{
    width:100%;
    border-radius: 5px;
}
.goods-info{
    text-align: center;
}
.goods-info p{
    width:100%;
    display: inline-block; 
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.goods-info .price{
    color:var(--color-high-text);
    margin-right:20px;
}
.goods-info .cfav{
    position: relative;
}
.goods-info .cfav::before{
    content:'';
    position: absolute;
    width:15px;
    height:15px;
    left:-15px;
    top:-1px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>