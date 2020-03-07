<template>
<div>
  <keep-alive exclude="detail">
      <router-view></router-view>
  </keep-alive>
  <mini-tabbar></mini-tabbar>
</div>
</template>

<script>
import miniTabbar from 'components/content/miniTabbar/MiniTabbar'

export default {
  name: 'App',
  components: {
    miniTabbar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
