<template>
    <div class="goods-show">
        <goods-show-item v-for="(item,index) in goodsData" :goodsItemData="item" :key="index"></goods-show-item>
    </div>
</template>

<script>
import goodsShowItem from './goodsShowItem'
export default {
    name:'goodsShow',
    props:{
        goodsData:{
            type:Array,
            default:function(){
                return [];
            }
        }
    },
    components:{
        goodsShowItem,
    }
}
</script>

<style scoped>
.goods-show{
    display:flex;
    flex-wrap: wrap;
    width:100%;
    font-size:0.8rem;
}

</style>
    
