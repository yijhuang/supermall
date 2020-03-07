<template>
    <div id='tabbar'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'tabbar',
}
</script>
<style scoped>
#tabbar {
  background-color: #f6f6f6;
  display:flex;
  
  height:49px;
  
  position: fixed;
  bottom:0px;
  left:0px;
  right:0px;
}
</style>