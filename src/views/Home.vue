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
    <TabControl class="tab-control" :tabTitles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
    <GoodsList :goodsList="goods[type].data"></GoodsList>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import TabControl from '@/components/content/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import HomeSwiper from '@/views/home/HomeSwiper'
import HomeRecommend from '@/views/home/HomeRecommend'
import FeatureView from '@/views/home/FeatureView'

import {getHomeIndexData, getGoodsList} from '@/network/home.js'
export default {
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommend: [],
      type: "pop",
      goods: {
        pop: {
          page: 0,
          data: []
        },
        news: {
          page: 0,
          data: []
        },
        good: {
          page: 0,
          data: []
        }
      }
    }
  },
  created() {
    this.loadHomeTopData();

    this.loadGoods('pop', 0);
    this.loadGoods('news', 0);
    this.loadGoods('good', 0);
  },
  methods: {
    tabClick(index) {
      switch(index){
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "news";
          break;
        case 2:
          this.type = "good";
          break;
      }
    },
    loadHomeTopData() {
      getHomeIndexData().then(res=>{
        this.banners = res.data.swiper;
        this.recommend = res.data.recommend;
      }).catch( err => {
        console.log(err);
      });
    },
    loadGoods(type, page) {
      getGoodsList(type, page).then(res=>{
        console.log(res);
        this.goods[type].page = page + 1;
        this.goods[type].data.push(...res.data);
      }).catch( err => {
        console.log(err);
      });
    }
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
