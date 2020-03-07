<template>
    <div class='backTop' v-show='isShow'>
        <img src="~assets/img/common/top.png">
    </div>
</template>
<script>
export default {
    name:"backTop",
    data:function(){
        return {
            isShow:true
        }
    }
}
</script>
<style scoped>
.backTop{
    z-index: 9;
    position:fixed;
    right:5px;
    bottom:70px;
}
.backTop img{
    width:50px;
}
</style>
