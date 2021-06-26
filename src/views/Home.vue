<template>
  <div class="home">
    <NavBar class="nav-bar">
      <template v-slot:center>
        <span>蘑菇街</span>
      </template>
    </NavBar>
    <TabControl ref="tabControlStiky" v-show="showStikyTabControl" class="tab-control tab-control-stiky" :tabTitles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>

    <Scroller
        class="scroller" ref="scroller"
        :observeImage="true"
        :probeType="3"
        @scroll="onScroll"
        @scrollEnd="onScrollEnd"
        @pullingUp="onPullingUp">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommendData="recommend"></HomeRecommend>
      <FeatureView></FeatureView>
      <TabControl ref="tabControl" class="tab-control" :tabTitles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
      <GoodsList :goodsList="goods[type].data" @onItemClick="onItemClick"></GoodsList>
    </Scroller>
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
      posY: 0,
    }
  },
  created() {
    console.log('home created')
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
  activated() {
    //console.log('home activated: ' + this.posY + ", "+this.scroller.getY() + ", sh: " + this.scroller.getScrollerHeight())
    this.onScrollEnd(this.scroller.getY());
    this.scroller.refresh();
    //console.log(this.scroller.getScrollerHeight())
    this.scroller.scrollTo(0, this.posY, 0);
  },
  deactivated() {
    this.posY = this.scroller.getY();
    //console.log('home deactivated: '+this.posY+ ", sh: " + this.scroller.getScrollerHeight())
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
    onItemClick(item) {
      this.$router.push('/detail/'+item.id);
    },
    onScroll(position, y) {
      //console.log("y: " + y+", " + ", offsetTop"+ this.tabControlEl.offsetTop);
      this.onScrollEnd(y);
    },
    onScrollEnd(y) {
      this.showBackTop = -y > 600;
      this.showStikyTabControl = -y >= this.tabControlEl.offsetTop;
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
  }
  .tab-control-stiky {
    position: relative;
    z-index: 10;
  }
  .tab-control {
    width: 100%;
    margin-bottom: 10px;
  }

  .scroller {
    position: absolute;
    left: 0;
    right: 0;
    top: 45px;
    bottom: 49px;
  }

</style>
