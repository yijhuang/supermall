<template>
    <div class="product-list-item">
        <!-- <div>{{itemData}}</div> -->
        <check-button class="check-button" @click.native="changeCheck" :isCheck="itemData.isCheck"></check-button>
        <div class="product-image">
            <img :src="itemData.image">
        </div>
        <div class="product-info">
            <div class="product-title">{{itemData.title}}</div>
            <div class="product-desc">{{itemData.desc}}</div>
            <div class="count-price">
                <div class="product-price">￥{{itemData.price}}</div>
                <div class="product-count">x{{itemData.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton.vue'
export default {
    name:'productListItem',
    props:{
        itemData:{
            type:Object,
            default:function(){
                return {};
            }
        }
    },
    components:{
        checkButton
    },
    methods:{
        changeCheck:function(){
            this.$store.commit('changeCheck',this.itemData);
        }
    }
}
</script>

<style scoped>
.product-list-item{
    width:100%;
    display:flex;
    padding:5px;
    border-bottom:3px solid #eee;
}
.product-image img{
    width:80px;
    height:100px;
    border-radius:8px;
    padding:0 5px;
    display:block;
}

.product-info{
    overflow: hidden;
    position:relative;
}
.product-desc, .product-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.product-desc{
    font-size:0.8rem;
    padding:20px 0;
    color:#999;
}

.count-price{
    display:flex;
    justify-content: space-between;
    position: absolute;
    bottom:10px;
    left:0px;
    right:0px;
}

.count-price .product-price{
    color:orangered;
}

.check-button{
    width:14%;
    line-height: 100px;
}


</style>