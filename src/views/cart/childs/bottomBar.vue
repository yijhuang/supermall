<template>
    <div class="bottom-bar">
        <div class="check-all" @click="selectAll">
            <img src="~assets/img/common/check.svg" :class="{check:selectAllCheck}">
            <div>全选</div>
        </div>
        <div class="total-price">合计:￥{{checkPrice}}</div>
        <div class="to-calc">去计算({{checkCount}})</div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'bottom-bar',
    computed:{
        ...mapGetters(['checkPrice','checkCount','selectAllCheck']),
    },
    methods:{
        selectAll:function(){
            this.$store.commit('selectAll');
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    height:30px;
    position:relative;
    top:-30px;

    display: flex;
    line-height: 30px;

    font-size:0.8rem;
    background-color: #eee;
}

/* .check-all{
    display:flex;
} */
.check-all img{
    width:16px;
    height:16px;
    border-radius: 50%;
    border:1px solid #ddd;
    margin:2px;

    vertical-align: middle;
} 
.check-all div{
    display: inline-block;
    vertical-align:middle;
}

.total-price{
    padding-left:20px;
}

.to-calc{
    margin-left:auto;
    padding:0 15px;
    background-color: orangered;
    color:#fff;
}

.check{
    background-color:orangered;
}
</style>