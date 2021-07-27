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
      <div class="line"></div>
      <ProductInfo :productInfo="productInfo"></ProductInfo>
      <div class="divider"></div>
      <CommentView :commentInfo="commentInfo"></CommentView>
      <div class="divider"></div>
      <ShopInfo :shopInfo="shopInfo"></ShopInfo>
      <div class="divider"></div>
      <DetailTab @tab-click="onTabClick"></DetailTab>
      <DetailInfo ref="detailInfoView" :detailInfo="detailInfo"></DetailInfo>
      <ItemParams ref="itemparamsView" :itemParams="itemParams"></ItemParams>
      <RecommendView ref="recommendView"></RecommendView>
    </Scroller>
    <BottomBar class="detail-bottom-bar" :bottomBar="bottomBar" @addCart="addCart"></BottomBar>
    <BackTop @click.native="backTop" v-show="showBackTop"></BackTop>
  </div>
</template>
<script>
import {getGoodsDetail,ProductInfoEntity} from '@/network/detail.js'

import {backTop} from '@/common/mixin.js'
import Scroller from '@/components/common/scroll/Scroller'
// import BackTop from '@/components/content/BackTop'

import DetailNavBar from './DetailNavBar'
import DetailSwiper from './DetailSwiper'
import SkuInfoBar from './SkuInfoBar'
import BottomBar from './BottomBar'
import ProductInfo from './ProductInfo'
import CommentView from './CommentView'
import ShopInfo from './ShopInfo'
import DetailTab from './DetailTab'
import DetailInfo from './DetailInfo'
import ItemParams from './ItemParams'
import RecommendView from './RecommendView'
export default {
  name: "Detail",
  components: {
    Scroller,
    DetailNavBar,
    DetailSwiper,
    // BackTop,
    SkuInfoBar,
    BottomBar,
    ProductInfo,
    CommentView,
    ShopInfo,
    DetailTab,
    DetailInfo,
    ItemParams,
    RecommendView,
  },
  mixins: [backTop],
  data() {
    return {
      id: null,
      banners: [],
      // showBackTop: false,
      skuBarInfo: {},
      topBanner: [],
      bottomBar: {},
      defaultCurrentIndex: 0,
      showBanner: true,
      productInfo: {},
      commentInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
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
      this.productInfo = new ProductInfoEntity(res.data.itemInfo, res.data.skuInfo, res.data.normalPrice, res.data.promotion, res.data.itemServices);
      this.commentInfo = res.data.rateInfoV2;
      this.shopInfo = res.data.shopInfo;
      this.detailInfo = res.data.detailInfo;
      this.itemParams = res.data.itemParams;
    }).catch(err=>{
      console.log(err)
    })
  },
  methods: {
    addCart() {
      const product = {
        image: this.topBanner[0].image,
        title: this.productInfo.itemInfo.title,
        desc: this.productInfo.itemInfo.desc,
        price: this.productInfo.lowPrice,
        iid: this.productInfo.itemId,
        count: 1,
      };
      console.log(product);
      // this.$store.state.productList.push(product);
      //this.$store.commit('addCart', product);
      this.$store.dispatch('addCart', product);
    },
    onScroll(position, scrollY) {
      //this.showBackTop = -scrollY > 1000;
      this.showBackTopIfNeed(scrollY);
    },
    onScrollEnd() {

    },
    // backTop() {
    //   this.$refs.scroller.scrollTo(0,0);
    // },
    onTabClick(index) {
      console.log(index);
      let offset = 0;
      if( index == 1 ) {
        offset = this.$refs.itemparamsView.$el.offsetTop;
      } else if( index == 2 ) {
        offset = this.$refs.recommendView.$el.offsetTop;
      } else if( index == 0 ) {
        offset = this.$refs.detailInfoView.$el.offsetTop;
      }
      this.$refs.scroller.scrollTo(0, -offset);
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
    bottom: 42px;
  }

  .detail-bottom-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 3;
  }
  .line {
    border-bottom: 1px solid #eeeeee;
    margin-left: 15px;
  }
  .divider {
    height: 10px;
    background: #efefef;
  }

</style>
