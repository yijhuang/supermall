<template>
    <div class="tabController">
        <div v-for="(item,index) in title" :key='index' :class="{tabActive:index === currentIndex}" @click="changeTab(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'tabController',
    props:{
        title:{
            type:Array,
            default:function(){
                return [];
            }
        },
    },
    data:function(){
        return {
            currentIndex:0,
        }  
    },
    methods:{
        changeTab:function(index){
            this.currentIndex = index;
            this.$emit('changeCurrent',index)
        }
    }

}
</script>

<style scoped>
.tabController{
    display:flex;
    text-align: center;
    padding:5px;
    background-color:#fff;
}
.tabController div{
    flex:1;
}
.tabController span{
    padding:5px;
}
.tabActive {
    color:var(--color-tint);
}
.tabActive span{
    border-bottom:2px solid var(--color-tint);
}
</style>