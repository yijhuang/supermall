<template>
    <div class='tabbar-item' @click='changePage'>
        <slot name="tabbarItem-icon" v-if='!isActivated'></slot>
        <slot name="tabbarItem-icon-activated" v-else></slot>
        <div :style="isActivated?{color:fontColor}:{}">
            <slot name="tabbarItem-text"></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'tabbar-item',
    props:{
        mPath:String,
        fontColor:{
            type:String,
            default:'#d4237a'
    },
    },
    computed:{
        isActivated:function(){
            return this.$route.path.indexOf(this.mPath) != -1;
        }
    },
    methods:{
        changePage:function(){
            this.$router.replace(this.mPath);
        }
    }
}
</script>

<style scoped> 
.tabbar-item {
  flex:1;
  text-align:center;
  font-size: 14px; 
}
.tabbar-item img{
    width:24px;
    vertical-align: top;
    margin-top:3px;
}
.activated {
    color:#d4237a;
}

</style>