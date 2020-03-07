<template>
    <div>
        <img src="~assets/img/common/check.svg" :class="{check:isCheck}">
    </div>
</template>

<script>
export default {
    name:'checkButton',
    props:{
        isCheck:{
            type:Boolean,
            default:true,
        }
    }
}
</script>

<style scoped>
    img{
        width:20px;
        height:20px;
        border-radius: 50%;
        border:1px solid #eee;
        
    }

    .check{
    background-color: orangered;
}
</style>