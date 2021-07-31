<template>
  <div ref="scroll" class="pullup-wrapper">
      <div class="pullup-content">
        <slot></slot>
        <div class="pullup-tips" v-if="pullUpLoad">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <span class="pullup-txt">上拉加载更多</span>
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">加载中...</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'
BScroll.use(ObserveImage)
BScroll.use(ObserveDOM)
BScroll.use(Pullup);
export default {
  name: "Scroller",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    observeImage: {
      type: Boolean,
      default: false,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    }

  },
  data() {
    return {
      isPullUpLoad: false,
      bscroll: {},
    }
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.scroll, {
      observeImage: this.observeImage, // 开启 observe-image 插件
      observeDOM: true, // 开启 observe-dom 插件
      scrollY: true,
      click: true,
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
    });
    if( this.probeType == 2 || this.probeType == 3 ) {
      this.bscroll.on('scroll', (position) => {
        //console.log(position.x, position.y)
        this.$emit('scroll', position, this.bscroll.y);
      });
    }
    if( this.pullUpLoad ) {
      this.bscroll.on('pullingUp', () => {
        this.$emit("pullingUp");
      });
    }
    this.bscroll.on('scrollEnd', () => {
      this.$emit("scrollEnd", this.bscroll.y);
    });
  },
  beforeDestroy() {
    this.bscroll.destroy()
  },
  methods: {
    finishPullUp() {
      this.bscroll.finishPullUp();
      this.isPullUpLoad = false;
    },
    refresh() {
      this.bscroll.refresh();
    },
    scrollTo(x, y, time=300){
      this.bscroll.scrollTo(x,y,time);
    },
    getY() {
      if( this.bscroll ) {
        return this.bscroll.y;
      }
      return 0;
    },
    getScrollerHeight() {
      if( this.bscroll ) {
        return this.bscroll.scrollerHeight;
      }
      return 0;
    }
  },
}
</script>

<style scoped>
  .pullup-wrapper {
    overflow: hidden;
  }

  .pullup-tips {
    padding: 20px;
    text-align: center;
    color: #999;
    font-size: 14px;
  }
</style>
