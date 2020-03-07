<template>
    <div class="toast" v-show="isShow">
        {{res}}
    </div>
</template>
<script>
export default {
    name:'toast',
    data:function(){
        return {
            res:'',
            isShow:false,
        }
    },
    methods:{
        show:function(res,delay){
            this.res = res;
            this.isShow = true;
            setTimeout(()=>{
                this.isShow = false;
                this.res = '';
            },delay);
        }
    }
}
</script>

<style scoped>
    .toast{
        background-color:rgba(0,0,0,0.7);
        padding:5px 10px;
        color:#fff;

        position:fixed;
        top:50%;
        left:50%;

        transform: translate(-50%,-50%);
    }
</style>