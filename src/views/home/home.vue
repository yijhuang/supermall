<template>
    <div id='home'>
        <navbar class="home-navbar">
            <div slot="center">购物街</div>
        </navbar>
        <tab-controller :title="['流行','新款','精选']"
            @changeCurrent="changeClass" 
            ref="tabControl1"
            v-show="tabShow"
            class='tabControl'></tab-controller>
        <scroll class="content" ref="scroll" 
            @scroll='getPos' 
            :probeType="2"
            :pullUpLoad="true"
            @pullingUp="loadMore">
            <swiperHome :multidata="banners" @finishLoad='getOffsetTop'></swiperHome>
            <recommend-view :recomandData="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-controller :title="['流行','新款','精选']"
            @changeCurrent="changeClass" 
            ref="tabControl2"></tab-controller>
            <goods-show :goodsData="currentGoodsData"></goods-show>
        </scroll>
        <back-top @click.native='backTop' v-show='isShow'></back-top>
    </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar.vue'
import tabController from 'components/content/tabController/tabController.vue'
import goodsShow from 'components/content/goodsShow/goodsShow.vue'
import scroll from 'components/common/BScroll/BScroll.vue'
import backTop from 'components/content/backTop/backTop.vue'

import swiperHome from 'views/home/childs/swiperHome.vue'
import recommendView from 'views/home/childs/recommendView.vue'
import featureView from 'views/home/childs/featureView.vue'


import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils.js'
import {itemListener} from 'common/mixin.js'
export default {
    name:'home_index',
    components:{
        navbar,
        swiperHome,
        recommendView,
        featureView,
        tabController,
        goodsShow,
        scroll,
        backTop
    },
    data:function(){
        return {
            banners:[],
            recommends:[],
            goodsData:{
                pop:{page:0,list:[]},
                new:{page:0,list:[]},
                sell:{page:0,list:[]}
            },
            currentClass:'pop',
            // isShow:false,
            tabOffsetTop:0,
            tabShow:false,
            saveY:0,
            // imgLoadListener:null
    }},
    created:function(){
        getHomeMultidata().then(res=>{
            // console.log(res);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        });
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },
    // mounted:function(){ 
    //     let refresh = debounce(this.$refs.scroll.refresh,500)
    //     this.imgLoadListener = ()=>{
    //         refresh();
    //     }
    //     this.$bus.$on('imgLoad',this.imgLoadListener);
    // },
    activated:function(){
        this.$refs.scroll.backTo(0,this.saveY,0);
        // alert('-----')
        this.$refs.scroll.refresh();
    },
    deactivated:function(){
        //console.log('deactivated')
        this.saveY = this.$refs.scroll.getScrollY();
        this.$bus.$off('imgLoad',this.imgLoadListener);

    },
    mixins:[itemListener],
    methods:{
        getHomeGoods:function(type){
            var page = this.goodsData[type].page + 1;
            getHomeGoods(type,page).then(res=>{
                this.goodsData[type].list.push(...res.data.list);
                this.goodsData[type].page = page;
            })
        },
        changeClass:function(index){
            this.currentClass = ['pop','new','sell'][index];
            this.$refs.tabControl2.currentIndex = index;
            this.$refs.tabControl1.currentIndex = index;
        },
        getPos:function(pos){

            this.isShow = pos.y<-1000;
            this.tabShow = pos.y < -this.tabOffsetTop;
            
        },
        loadMore:function(){
            this.getHomeGoods(this.currentClass);
            this.$refs.scroll.finishPullUp();
        },
        getOffsetTop:function(){
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        }
        
    },
    computed:{
        currentGoodsData:function(){
            return this.goodsData[this.currentClass].list;
        },
    }
}
</script>

<style scoped>
#home{
    height:100vh;
    position:relative;
}
.home-navbar{

    z-index: 9;

    background-color: var(--color-tint);
    color:#fff;
    box-shadow: 0px 1px 5px #fa7480;
    font-size: 1rem;
}

.tabControl{
    position:relative;
    z-index: 9;
}
.content {
    overflow:hidden;
    position:absolute;
    top:44px;
    bottom:49px;
    left:0px;
    right:0px;

}
</style>