<template>
  <div class="detail">
    <DetailNavBar></DetailNavBar>
    <Scroller
        class="scroller" ref="scroller"
        :observeImage="true"
        :probeType="3"
        :pullUpLoad="false"
        @scroll="onScroll"
        @scrollEnd="onScrollEnd">

      <DetailSwiper v-if="showBanner" :banners="banners" :defaultCurrentIndex="0" :key="1"></DetailSwiper>
      <DetailSwiper v-else :banners="skuBanners" :defaultCurrentIndex="defaultCurrentIndex" :key="2"></DetailSwiper>

      <SkuInfoBar :skuBarInfo="skuBarInfo" :topBanner="topBanner"
        @selectSkuEvent="onSelectSkuEvent"></SkuInfoBar>
    </Scroller>
    <BottomBar class="detail-bottom-bar" :bottomBar="bottomBar"></BottomBar>
    <BackTop @click.native="backTop" v-show="showBackTop"></BackTop>
  </div>
</template>
<script>
import {getGoodsDetail} from '@/network/home.js'

import Scroller from '@/components/common/scroll/Scroller'
import BackTop from '@/components/content/BackTop'

import DetailNavBar from './DetailNavBar'
import DetailSwiper from './DetailSwiper'
import SkuInfoBar from './SkuInfoBar'
import BottomBar from './BottomBar'
export default {
  name: "Detail",
  components: {
    Scroller,
    DetailNavBar,
    DetailSwiper,
    BackTop,
    SkuInfoBar,
    BottomBar,
  },
  data() {
    return {
      id: null,
      banners: [],
      showBackTop: false,
      skuBarInfo: {},
      topBanner: [],
      bottomBar: {},
      defaultCurrentIndex: 0,
      showBanner: true,
    };
  },
  created() {
    console.log(this.$route);
    this.id = this.$route.params.id;
    getGoodsDetail(this.id).then((res)=>{
      let banners = [];
      res.data.topImages.forEach(e => {
        banners.push({image: e, link:'https://www.baidu.com'});
      });
      this.banners = banners;
      this.topBanner = banners;
      this.skuBarInfo = res.data.skuBarInfo;
      this.bottomBar = res.data.bottomBar;
      console.log(res.data);

    }).catch(err=>{
      console.log(err)
    })
  },
  methods: {
    onScroll() {

    },
    onScrollEnd() {

    },
    backTop() {

    },
    onSelectSkuEvent(index) {
      this.showBanner = index === -1;
      if( !this.showBanner ) {
        this.$nextTick(()=>{
          this.defaultCurrentIndex = index;
        })
      }
    }
  },
  computed: {
    skuBanners: function() {
      let list = [];
      for(let i=0; i<this.skuBarInfo.list.length; i++ ) {
        let it = this.skuBarInfo.list[i];
        list.push({image: it.image, link:'http://baidu.com'});
      }
      return list;
    }
  }
}
</script>
<style scoped>
  .detail {
    height: 100vh;
    z-index: 2;
    position: relative;
  }

  .scroller {
    position: absolute;
    left: 0;
    right: 0;
    top: 40px;
    bottom: 49px;
  }

  .detail-bottom-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 3;
  }
</style>
