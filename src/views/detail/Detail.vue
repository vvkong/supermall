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
      <DetailSwiper :banners="banners"></DetailSwiper>

    </Scroller>
    <BackTop @click.native="backTop" v-show="showBackTop"></BackTop>
  </div>
</template>
<script>
import {getGoodsDetail} from '@/network/home.js'

import Scroller from '@/components/common/scroll/Scroller'
import BackTop from '@/components/content/BackTop'

import DetailNavBar from './DetailNavBar'
import DetailSwiper from './DetailSwiper'
export default {
  name: "Detail",
  components: {
    Scroller,
    DetailNavBar,
    DetailSwiper,
    BackTop,
  },
  data() {
    return {
      id: null,
      banners: [],
      showBackTop: false,
    };
  },
  created() {
    console.log(this.$route);
    this.id = this.$route.params.id;
    console.log(this.id);
    getGoodsDetail(this.id).then((res)=>{
      let banners = [];
      res.data.topImages.forEach(e => {
        banners.push({image: e, link:'https://www.baidu.com'});
      });
      this.banners = banners;

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
  },
}
</script>
<style scoped>
  .detail {
    height: 100vh;
  }
  .scroller {

  }

</style>
