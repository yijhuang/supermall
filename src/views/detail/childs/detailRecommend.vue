<template>
    <div class="recommend">
        <goods-show :goodsData="recommendData.list" ></goods-show>
    </div>
</template>
<script>
import goodsShow from 'components/content/goodsShow/goodsShow.vue'
import goodsShowItem from 'components/content/goodsShow/goodsShowItem.vue'
export default {
    name:'detailRecommend',
    props:{
        recommendData:{
            type:Object,
            default:function(){
                return {};
            }
        }
    },
    components:{
        goodsShow,
        goodsShowItem,
    }
}
</script>

<style scoped>
    .recommend{
        width:100%;
    }
    
</style>