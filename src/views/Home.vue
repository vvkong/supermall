<template>
  <div>
    <NavBar class="nav-bar">
      <template v-slot:center>
        <span>首页</span>
      </template>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommendData="recommend"></HomeRecommend>
    <h1>Home</h1>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from '@/views/home/HomeSwiper'
import HomeRecommend from '@/views/home/HomeRecommend'
import {getHomeIndexData} from '@/network/home.js'
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
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
  .nav-bar {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
  }

</style>
