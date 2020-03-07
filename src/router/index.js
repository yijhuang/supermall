import Vue from 'vue'
import Router from 'vue-router'

const home = ()=>import('views/home/home.vue')
const cart = ()=>import('views/cart/cart.vue')
const category = ()=>import('views/category/category.vue')
const profile = ()=>import('views/profile/profile.vue')
const detail = ()=>import('views/detail/detail.vue')

Vue.use(Router)
const routes = [
    {
      path:'/',
      redirect:'/home',
    },
    {
      path:'/home',
      component:home,
      meta:{
        title:'home'
      }
    },{
      path:'/cart',
      component:cart,
      meta:{
        title:'cart'
      }
    },{
      path:'/category',
      component:category,
      meta:{
        title:'category'
      }
    },{
      path:'/profile',
      component:profile,
      meta:{
        title:'profile'
      }
    },{
      path:'/details',
      component:detail,
    }
  ]
export default new Router({
    routes,
    mode:'history'
})