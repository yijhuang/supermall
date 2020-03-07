<template>
    <div class="navbar">
        <div class="navbar-left">
            <slot name="left"></slot>
        </div>
        <div class="navbar-center">
            <slot name="center"></slot>
        </div>
        <div class="navbar-right">
            <slot name="right"></slot>     
        </div>         
    </div>
</template>
<script>
export default {
    name:'navbar',
}
</script>
<style scoped>
.navbar{
    display:flex;
    height: 44px;
    line-height: 44px;
    width:100%;
    text-align: center;
}
.navbar-left,.navbar-right{
    width:60px;
}
.navbar-center{
    flex:1;
}
</style>