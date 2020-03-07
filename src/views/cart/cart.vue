<template>
    <div id="cart">
        <cart-navbar></cart-navbar>
        <scroll class="content" ref="scroll">
            <product-list></product-list>
        </scroll>
        <bottom-bar></bottom-bar>
        
    </div>
</template>

<script>
import scroll from 'components/common/BScroll/BScroll.vue'

import cartNavbar from './childs/navbar.vue'
import productList from './childs/productList.vue'
import bottomBar from './childs/bottomBar.vue'

export default {
    name:'cart_index',
    components:{
        cartNavbar,
        productList,
        bottomBar,
        scroll,
    },
    activated:function(){
        this.$refs.scroll.refresh();
    }
}
</script>

<style scoped>
#cart {
    width:100vw;
}

.content{
    height:calc(100vh - 44px - 49px);
}
</style>