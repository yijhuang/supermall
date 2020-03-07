<template>
    <swiper>
        <swiper-item v-for="(item,index) in swiperImg" :key="index">
            <img :src="item">
        </swiper-item>
    </swiper>
</template>
<script>
import {swiper,swiperItem} from 'components/common/swiper/swiper.js'
export default {
    name:'detailSwiper',
    components:{
        swiper,
        swiperItem,
    },
    props:{
        swiperImg:{
            type:Array,
            default:function(){
                return [];
            }
        }
    }
}
</script>