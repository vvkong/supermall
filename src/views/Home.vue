<template>
  <div class="home">
    <NavBar class="nav-bar">
      <template v-slot:center>
        <span>蘑菇街</span>
      </template>
    </NavBar>
    <Scroller
        class="scroller" ref="scroller"
        :observeImage="true"
        @scroll="onScroll"
        @scrollEnd="onScrollEnd"
        @pullingUp="onPullingUp">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommendData="recommend"></HomeRecommend>
      <FeatureView></FeatureView>
      <TabControl ref="tabControl" class="tab-control" :tabTitles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
      <GoodsList :goodsList="goods[type].data"></GoodsList>
    </Scroller>
    <TabControl ref="tabControlStiky" v-show="showStikyTabControl" class="tab-control tab-control-stiky" :tabTitles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
    <BackTop @click.native="backTop" v-show="showBackTop"></BackTop>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import Scroller from '@/components/common/scroll/Scroller'

import TabControl from '@/components/content/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/BackTop'

import HomeSwiper from '@/views/home/HomeSwiper'
import HomeRecommend from '@/views/home/HomeRecommend'
import FeatureView from '@/views/home/FeatureView'

import {getHomeIndexData, getGoodsList} from '@/network/home.js'
export default {
  components: {
    NavBar,
    Scroller,
    TabControl,
    GoodsList,
    BackTop,
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
      },
      showBackTop: false,
      showStikyTabControl: false,
    }
  },
  created() {
    this.loadHomeTopData();

    this.loadGoods('pop', 0);
    this.loadGoods('news', 0);
    this.loadGoods('good', 0);
  },
  mounted() {
    this.tabControlEl = this.$refs.tabControl.$el;
    this.tabControl = this.$refs.tabControl;
    this.tabControlStiky = this.$refs.tabControlStiky;

    this.scroller = this.$refs.scroller;
    //console.log(this.tabControlEl);
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
        default:
          return;
      }
      this.tabControl.setCurrentIndex(index);
      this.tabControlStiky.setCurrentIndex(index);

      if( this.tabControlEl.offsetTop < (-this.scroller.getY()) ) {
        this.scroller.scrollTo(0,-this.tabControlEl.offsetTop,0);
      }
    },
    backTop() {
      this.scroller.scrollTo(0,0);
    },
    onScroll(position, y) {
      //console.log(this.scroller.getY()+", " + y+", "+position + ", "+ this.tabControlEl.offsetTop);
      this.showStikyTabControl = -y >= this.tabControlEl.offsetTop;
      this.showBackTop = -y > 600;
    },
    onScrollEnd(y) {
      this.showBackTop = -y > 600;
    },
    onPullingUp() {
      this.loadGoods(this.type, this.goods[this.type].page+1, true);
    },
    loadHomeTopData() {
      getHomeIndexData().then(res=>{
        this.banners = res.data.swiper;
        this.recommend = res.data.recommend;
      }).catch( err => {
        console.log(err);
      });
    },
    loadGoods(type, page, loadMore=false) {
      getGoodsList(type, page).then(res=>{
        //console.log(res);
        this.goods[type].page = page;
        this.goods[type].data.push(...res.data);
        if( loadMore ) {
          this.scroller.finishPullUp();
        }
      }).catch( err => {
        console.log(err);
        if( loadMore ) {
          this.scroller.finishPullUp();
        }
      });
    }
  },
}
</script>

<style scoped>
  .home {
    position: relative;
    height: 100vh;
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
    background: white;
  }
  .tab-control-stiky {
    position: absolute;
    top: 48px;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .scroller {
    position: absolute;
    left: 0;
    right: 0;
    top: 45px;
    bottom: 49px;
  }

</style>
