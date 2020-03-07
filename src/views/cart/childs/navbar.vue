<template>
    <navbar class="navbar">
        <div slot="center">购物车({{productCount}})</div>
    </navbar>
</template>
<script>
import {mapGetters} from 'vuex'
import navbar from 'components/common/navbar/navbar.vue'
export default {
    name:'cartNavbar',
    components:{
        navbar,
    },
    computed:{
        ...mapGetters(['productCount','productList'])
    }
}
</script>

<style scoped>
.navbar{
    background-color:var(--color-tint);
    color:#fff;
}
</style>