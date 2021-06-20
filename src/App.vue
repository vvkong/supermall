<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>

  </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar.vue'
import request from '@/network/request.js'
export default {
  name: 'App',
  components: {
    MainTabBar,
  },
  created() {
      request({
          method: 'GET',
          url: '/index',
      })
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  },
}
</script>

<style>
    @import '~@/assets/css/base.css';
</style>
