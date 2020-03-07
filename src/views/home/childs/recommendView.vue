<template>
    <div id='recommendView'>
        <a class='recommendView-Item' v-for="(item,index) in recomandData" :key='index' :href="item.link">
            <img :src="item.image">
            <div>{{item.title}}</div>
        </a>
    </div>
</template>

<script>
export default {
    name:'recomandView',
    props:{
        recomandData:{
            type:Array,
            default:function(){
                return []
            },
        }
    }
}
</script>
<style>
#recommendView{
    display:flex;
    padding:10px 0px 20px;
    border-bottom: 6px solid #eee;
}

.recommendView-Item{
    flex:1;
    font-size: 0.8rem;
    text-align: center;
}
.recommendView-Item img{
    width:4.5rem;
}
</style>

