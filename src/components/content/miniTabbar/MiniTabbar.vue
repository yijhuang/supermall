<template>
<tabbar>
      <tabbar-item m-path='/home'>
        <img src="~assets/img/tabbar/home.svg" alt="home" slot="tabbarItem-icon">
        <img src="~assets/img/tabbar/home_activated.svg" alt="home_activated" slot="tabbarItem-icon-activated">
        <div slot="tabbarItem-text">首页</div>
      </tabbar-item>
      <tabbar-item m-path='/category'>
        <img src="~assets/img/tabbar/category.svg" alt="category" slot="tabbarItem-icon">
        <img src="~assets/img/tabbar/category_activated.svg" alt="category_activated" slot="tabbarItem-icon-activated">
        <div slot="tabbarItem-text">分类</div>
      </tabbar-item>
      <tabbar-item m-path='/cart'>
        <img src="~assets/img/tabbar/cart.svg" alt="cart" slot="tabbarItem-icon">
        <img src="~assets/img/tabbar/cart_activated.svg" alt="cart_activated" slot="tabbarItem-icon-activated">
        <div slot="tabbarItem-text">购物车</div>
      </tabbar-item>
      <tabbar-item m-path='/profile'>
        <img src="~assets/img/tabbar/profile.svg" alt="home" slot="tabbarItem-icon">
        <img src="~assets/img/tabbar/profile_activated.svg" alt="profile_activated" slot="tabbarItem-icon-activated">
        <div slot="tabbarItem-text">我的</div>
      </tabbar-item>
    </tabbar>
</template>

<script>
import tabbarItem from 'components/common/tabbar/tabbar-item'
import tabbar from 'components/common/tabbar/tabbar'
export default {
    name:'miniTabbar',
    components:{
        tabbar,
        tabbarItem
    }
}
</script>

