<template>
    <div class='navbar'>
        <navbar>
            <div slot='left' class=left @click="back">
                <img src="~assets/img/common/back.svg">
            </div>
            <div slot='center' class='title'>
                <div v-for="(item,index) in title" :key="index" class='title-item' 
                :class='{active:currentIndex === index}'
                @click='changeCurrentIndex(index)'>{{item}}</div>
            </div>
        </navbar>
    </div>
</template>
<script>
import navbar from 'components/common/navbar/navbar'
export default {
    name:'detailNavbar',
    components:{
        navbar,
    },
    props:{
        title:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    data:function(){
        return {
            currentIndex:0,
        }
    },
    methods:{
        changeCurrentIndex(index){
            this.currentIndex = index;
            this.$emit('scrollToTheme',index);
        },
        back:function(){
            this.$router.back();
        }
    }
}
</script>
<style scoped>
.title{
    display: flex;
}

.title-item{
    flex:1;
    font-size: 0.8rem;
}

.active{
    color:var(--color-high-text);
}
.left img{
    margin-top:12px;
}
</style>