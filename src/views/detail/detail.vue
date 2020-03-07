<template>
    <div id='details'>
        <detail-navbar :title="['商品','参数','评论','推荐']" @scrollToTheme="scrollToTheme" ref="navbar"></detail-navbar>
        <scroll class='content' ref="scroll" @scroll="getScrollY" :probe-type="3">
            <detail-swiper :swiperImg="swiperData" class="detail-swiper"></detail-swiper>
            <detail-base-info :baseInfo="baseInfo"></detail-base-info>
            <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
            <detail-image-info :detailInfo="detailInfo" @detailImgLoad="detailImgLoad"></detail-image-info>
            <detail-params-info :paramsInfo="paramsInfo" ref="paramsInfo"></detail-params-info>
            <detail-comment :detailComment="commentInfo" ref="commentInfo"></detail-comment>
            <detail-recommend :recommendData="recommendData" ref="recommendInfo"></detail-recommend>
        </scroll>
        <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
        <back-top v-show="isShow" @click.native="backTop"></back-top>

    </div>
</template>

<script>
import scroll from 'components/common/BScroll/BScroll.vue'
import backTop from 'components/content/backTop/backTop.vue'
import detailNavbar from './childs/detailNavbar'
import detailSwiper from './childs/detailSwiper'
import detailBaseInfo from './childs/detailBaseInfo'
import detailShopInfo from './childs/detailShopInfo'
import detailImageInfo from './childs/detailImageInfo'
import detailParamsInfo from './childs/detailParamsInfo'
import detailComment from './childs/detailComment'
import detailRecommend from './childs/detailRecommend'
import detailBottomBar from './childs/detailBottomBar'

import {getDetailData,getRecommandData,BaseInfo,ShopInfo,ParamsInfo} from 'network/detail.js'
import {debounce} from 'common/utils.js'
import {itemListener} from 'common/mixin.js'
export default {
    name:'detail',
    components:{
        detailNavbar,
        detailSwiper,
        detailBaseInfo,
        detailShopInfo,
        detailImageInfo,
        detailParamsInfo,
        detailComment,
        detailRecommend,
        scroll,
        detailBottomBar,
        backTop,
    },
    data:function(){
        return {
            id:'',
            swiperData:[],
            baseInfo:{},
            shopInfo:{},
            detailInfo:{},
            paramsInfo:{},
            commentInfo:{},
            recommendData:{},
            // imgLoadListener:null,
            themeTopY:[],
            getThemeTopY:null,
            currentIndex:0,
        }
    },
    created:function(){
        this.id = this.$route.query.id;       
        getDetailData(this.id).then(res=>{
            let result = res.result;
            this.swiperData = result.itemInfo.topImages;
            this.baseInfo = new BaseInfo(result.itemInfo,result.columns,result.shopInfo.services);
            this.shopInfo = new ShopInfo(result.shopInfo);
            this.detailInfo = result.detailInfo;
            this.paramsInfo = new ParamsInfo(result.itemParams.info,result.itemParams.rule);
            if(this.commentInfo.cRate !== 0){
                this.commentInfo = result.rate.list[0];
            }
        })
        getRecommandData().then(res=>{  
            this.recommendData = res.data;
        })
        
    },
    methods:{
        detailImgLoad:function(){
            this.refresh();
            this.getThemeTopY();
        },
        scrollToTheme:function(index){
            this.$refs.scroll.backTo(0,-this.themeTopY[index],500);
        },
        getScrollY:function(position){
            if(-position.y > 1000){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
            for(let i=0;i<this.themeTopY.length-1;i++){
                if((this.currentIndex !== i) && this.themeTopY[i]<=-position.y && this.themeTopY[i+1]>-position.y){
                    this.currentIndex = i;
                    this.$refs.navbar.currentIndex = this.currentIndex;
                }
            }

        },
        addCart:function(){
            let product = {};
            product.iid = this.id;
            product.image = this.swiperData[0];
            product.title = this.baseInfo.title;
            product.desc = this.detailInfo.desc;
            product.price = this.baseInfo.price;
            this.$store.dispatch('addCart',product).then((res)=>{
                this.$toast.show(res,2000);
            });
        }
    },
    mounted:function(){
        this.getThemeTopY = debounce(()=>{
            this.themeTopY = [];
            this.themeTopY.push(0);
            this.themeTopY.push(this.$refs.paramsInfo.$el.offsetTop);
            this.themeTopY.push(this.$refs.commentInfo.$el.offsetTop);
            this.themeTopY.push(this.$refs.recommendInfo.$el.offsetTop);
            this.themeTopY.push(Number.MAX_VALUE);
        },500);
    },
    // mounted:function(){
    //     var refresh = debounce(this.$refs.scroll.refresh,500);
    //     this.imgLoadListener = ()=>{
    //         refresh();
    //     }
    //     this.$bus.$on('imgLoad',this.imgLoadListener);
    // },
    destroyed:function(){
        this.$bus.$off('imgLoad',this.imgLoadListener);
    },
    mixins:[itemListener],
}
</script>

<style scoped>
#detail{
    position:relative;
    height:100vh;
}
/* swiper style */
.detail-swiper{
    height:250px;
}
/* scroll style */
.content{
    /* position: absolute;
    top:44px;
    bottom:49px; */
    position:relative;
    height:calc(100vh - 44px - 49px);
    background-color:#fff;
    width:100%;
}
</style>