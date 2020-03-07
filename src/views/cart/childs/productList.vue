<template>
    <div class="product-list">
        <product-list-item v-for="(item,index) in productList" :key="index" :itemData="item"></product-list-item>
    </div>
</template>

<script>
import productListItem from './productListItem.vue'
import {mapGetters} from 'vuex'

export default {
    name:'productList',
    components:{
        productListItem,
    },
    computed:{
        ...mapGetters(['productList']),
    }
}
</script>

<style scoped>
.product-list{
    width:100%;
}
</style>
