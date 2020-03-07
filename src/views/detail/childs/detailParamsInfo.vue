<template>
    <div class='params-info' v-if="Object.keys(paramsInfo)">
        <div class="params-size">
            <table v-for="(table,index1) in paramsInfo.size" :key="index1">
                <tr v-for="(item,index2) in table" :key="index2">
                    <td v-for="(col,index3) in item" :key="index3">
                        {{col}}
                    </td>
                </tr>
            </table>
            <!-- {{paramsInfo.size}} -->
        </div>
        <div class="params-rule">
            <table class="params-rule">
                <tr v-for="(rule,index4) in paramsInfo.rule" :key="index4">
                    <td class="rule-key">{{rule.key}}</td>
                    <td class="rule-value">{{rule.value}}</td>
                </tr>
            </table>
            <!-- {{paramsInfo.rule}} -->
        </div>
        <div class="params-image" v-if="paramsInfo.image">
            <img v-for="(image,index5) in paramsInfo.image" :key="index5" :src="image">
        </div>

    </div>
</template>

<script>
export default {
    name:'detailParamsInfo',
    props:{
        paramsInfo:{
            type:Object,
            default:function(){
                return {};
            }
        }
    }

}
</script>

<style scoped>
/* base style */
.params-info{
    font-size:0.8rem;
    /* text-align:center; */
    padding-bottom:20px;
    border-bottom:3px solid #eee;
}
.params-info table{
    width:100%;
    border-collapse: collapse;
    margin:0 5px;
}
/*size style*/

.params-size td{
    padding:10px 0;
    border-bottom:1px solid #eee;
}
/*params-rule*/
.params-rule td{
    border-top:1px solid #eee;
    padding:10px 0;
}
.params-rule .rule-key{
    width:95px;
}
.params-rule .rule-value{
    color:var(--color-high-text);
}
/*params-image*/
.params-image img{
    width:100%;
}
</style>
