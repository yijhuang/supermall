import Vue from 'vue'
import Vuex from 'vuex'
//Vue 注册插件
Vue.use(Vuex);
// 创建vuex 实例

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

export default new Vuex.Store({
    state:{
        productList:[],
    },
    mutations,
    actions,
    getters,
})

