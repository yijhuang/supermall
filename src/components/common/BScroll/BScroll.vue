<template>
    <div class="wrapper" ref="scroll">
        <div class='content'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BS from 'better-scroll'
export default {
    name:'scroll',
    props:{
        probeType:{
            type:Number,
            default:0,
        },
        pullUpLoad:{
            type:Boolean,
            default:false,
        }
    },
    data:function(){
        return {
            scroll:null,
        }
    },
    mounted:function(){
        // console.log(this.$refs.scroll);
        this.scroll = new BS(this.$refs.scroll,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
        });
        if(this.probeType==2 || this.probeType==3){
            this.scroll.on('scroll',(position)=>{
                this.$emit('scroll',position);
            });
        }
        if(this.pullUpLoad)
        {
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp');
            })
        }

    },
    methods:{
        backTo:function(x,y,time=1000){
            // console.log(this.scroll.x,this.scroll.y);
            this.scroll.scrollTo(x,y,time);
        },
        refresh:function(){

             this.scroll && this.scroll.refresh();
        },
        finishPullUp:function(){
            this.scroll && this.scroll.finishPullUp();
        },
        getScrollY:function(){
            return this.scroll ? this.scroll.y:0;
        }

    }
}
</script>

<style scoped>
    .wrapper{
        overflow: hidden;
    }
</style>