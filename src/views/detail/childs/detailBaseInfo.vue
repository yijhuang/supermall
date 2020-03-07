<template>
    <div class="base-info">
        <div class="base-title">{{baseInfo.title}}</div>
        <div class="base-price">
            <span class='nPrice'>{{baseInfo.nPrice}}</span>
            <span class='oPrice'>{{baseInfo.oPrice}}</span>
            <span v-if="baseInfo.disc" class='disc'>{{baseInfo.disc}}</span>
        </div>
        <div class='base-column' v-if="baseInfo.column">
            <span>{{baseInfo.column[0]}}</span>
            <span>{{baseInfo.column[1]}}</span>
            <span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
        </div>
        <div class="base-services" v-if="baseInfo.services">
            <div v-for="index in baseInfo.services.length-1" :key="index">
                <img :src="baseInfo.services[index-1].icon">{{baseInfo.services[index-1].name}}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'detailBaseInfo',
    props:{
        baseInfo:{
            type:Object,
            default:function(){
                return {};
            }
        }
    }
}
</script>

<style scoped>
.base-info{
    margin: 15px 5px;
}
/* title style */
.base-title{
    color:black;
}
/* price style */
.base-price{
    padding:10px 0px;
}
.base-price .nPrice{
    font-size:1.5rem;
    color:var(--color-tint);
    padding-right:5px;
}
.base-price .oPrice{
    font-size:0.8rem;
    text-decoration: line-through;
    /* padding-right:5px; */
    color:#999;

}
.base-price .disc{
   font-size: 0.6rem;
    padding: 3px;
    background-color: #f00;
    border-radius: 5px;
    color: #fff;

    position: relative;
    top: -8px;
}
/* column style */
.base-column{
    display:flex;
    font-size:0.8rem;
    color:#999;
    justify-content: space-between;
    height:30px;
    line-height:30px;
    border-bottom: 1px solid #eee
}
/* services style */
.base-services{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    font-size: 0.8rem;
    border-bottom: 3px solid #eee;
}

.base-services img{
    width: 0.9rem;
    font-size: 0.9rem;

    position: relative;
    top: 2px;

    padding-right: 2px;
}


</style>