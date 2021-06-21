<template>
  <div class="home">
    <NavBar class="nav-bar">
      <template v-slot:center>
        <span>蘑菇街</span>
      </template>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommendData="recommend"></HomeRecommend>
    <FeatureView></FeatureView>
    <TabControl class="tab-control" :tabTitles="['流行','新款','精选']"></TabControl>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <h1>Home</h1>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import TabControl from '@/components/content/TabControl'

import HomeSwiper from '@/views/home/HomeSwiper'
import HomeRecommend from '@/views/home/HomeRecommend'
import FeatureView from '@/views/home/FeatureView'

import {getHomeIndexData} from '@/network/home.js'
export default {
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommend: [],
    }
  },
  created() {
    getHomeIndexData().then(res=>{
      this.banners = res.data.swiper;
      this.recommend = res.data.recommend;
    }).catch( err => {
      console.log(err);
    });
  },
}
</script>

<style scoped>
  .home {
    padding-top: 49px;
    padding-bottom: 49px;
  }
  .nav-bar {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: white;
  }
  .tab-control {
    position: sticky;
    top: 48px;
    background: white;
  }

</style>
