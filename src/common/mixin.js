import {debounce} from './utils.js'
export const itemListener = {
    data:function(){
        return {
            imgLoadListener:null,
            refresh:null,
            isShow:false,
        }
    },
    mounted:function(){
        //console.log('mounted');
        this.refresh = debounce(this.$refs.scroll.refresh,500);
        this.imgLoadListener = ()=>{
            this.refresh();
        }
        this.$bus.$on('imgLoad',this.imgLoadListener);
    },
    methods:{
        backTop:function(){
            this.$refs.scroll.backTo(0,0);
            this.isShow = false;
        },
    }
} 