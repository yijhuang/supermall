<template>
    <div class="image-info">
        <div class="info-desc">
            <div class='start'></div>
            <div class='desc'>{{detailInfo.desc}}</div>
            <div class='end'></div>
        </div>
        <div class='detail-info'>
            <div v-for="(item1,index1) in detailInfo.detailImage" :key="index1">
                <div class="detail-key">
                    {{item1.key}}
                </div>
                <div class="detail-image">
                    <img v-for="(item2,index2) in item1.list" :key="index2" :src="item2" @load="imgLoader">
                </div>              
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'detailImageInfo',
    props:{
        detailInfo:{
            type:Object,
            default:function(){
                return {};
            }
        }
    },
    methods:{
        imgLoader:function(){
            this.$emit('detailImgLoad');
        }
    }
}
</script>

<style scoped>
.image-info{
    width:100%;
    padding-bottom:20px;
    border-bottom:3px solid #eee;
}
/* desc style */
.info-desc{
    margin:20px 5px;
}
.info-desc .start, .info-desc .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
}
.start{
    float:left;
}
.end{
    float:right;
}
.info-desc .start::before, .info-desc .end::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
}
.info-desc .desc{
    padding:5px;
    font-size:0.9rem;
}
/* detail info*/
.detail-info .detail-key{
    padding:5px;
}
.detail-info img{
    width:100%;
}
</style>