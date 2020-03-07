<template>
    <swiper>
        <swiper-item v-for="(item,index) in multidata" :key="index">
            <a :href="item.link">
                <img :src="item.image" @load='finishLoad'>
            </a>
        </swiper-item>
    </swiper>
</template>
<script>
import {swiper,swiperItem} from 'components/common/swiper/swiper.js'
export default {
    name:'swiperHome',
    data:function(){
        return {
            load:false
        };
    },
    components:{
        swiper,
        swiperItem
    },
    props:{
        multidata:Array,
    },
    methods:{
        finishLoad:function(){
            if(!this.load){
                this.$emit('finishLoad');
                this.load = true;
            }           
        }
    }
}
</script>