<template>
    <div class="comment">
        <div class="comment-header">
            <div class='left'>用户评价</div>
            <div class="right">更多</div>
        </div>
        <div class="comment-user" v-if="detailComment.user">
            <img :src="detailComment.user.avatar">
            <span>{{detailComment.user.uname}}</span>
        </div>
        <div class="comment-content">{{detailComment.content}}</div>
        <div class="comment-extra-info">
            <span>{{detailComment.created | getCommentTime}}</span>
            <span>{{detailComment.style}}</span>
        </div>
        <div class="comment-image">
            <img :src="item" v-for="(item,index) in detailComment.images" :key="index">
        </div>
    </div>
</template>

<script>
import {formatDate} from 'common/utils.js'
export default {
    name:"detailComment",
    props:{
        detailComment:{
            type:Object,
            default:function(){
                return {};
            }
        }
    },
    filters:{
        getCommentTime:function(time){
            return formatDate(new Date(time*1000),'yyyy-MM-dd');
        }
    }
}
</script>

<style scoped>
.comment{
    width:100%;
    font-size:0.8rem;
    padding:0 10px 20px;
    border-bottom:3px solid #eee;
}
/* header style */
.comment-header{
    height:40px;
    line-height:40px;
    border-bottom:1px solid #eee;
}
.comment-header .left{
    float:left;
}
.comment-header .right{
    float:right;
}
/* comment user */
.comment-user{
    padding:10px 0;
}
.comment-user img{
    width:3rem;
    border-radius: 1.5rem;
    padding:5px;
}
.comment-user span{
    position: relative;
    top: -1.15rem;
    font-size: 1rem;
}
.comment-content,.comment-extra-info,.comment-image{
    padding:0px 5px;
}
/* extra-info style */
.comment-extra-info{
    height:30px;
    line-height:30px;

    color:#999;
}
/* image style */
.comment-image img{
    width:25%;
    margin-right:5px;
}
</style>