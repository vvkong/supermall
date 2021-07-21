<template>
    <div class="swiper-container">
      <div class="swiper" ref="swiper"
          @touchstart="touchStart"
          @touchmove="touchMove"
          @touchend="touchEnd">
          <slot>
          </slot>
      </div>
      <div class="indicator" v-if="showIndicator&&swipeItemCount>1">
        <slot name="indicator">
          <div v-for="(item, index) in swipeItemCount" :key="index"
            class="indicator-item"
            :class="{active: index==currentIndex-1}">
          </div>
        </slot>
      </div>
    </div>
</template>
<script>
export default {
  name: "Swiper",
  props: {
    defaultCurrentIndex: {
      type: Number,
      default: 0,
    },
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    animTime: {
      type: Number,
      default: 200,
    },
    autoSlid: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 4000,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentIndex: 1,
      swipeItemCount: 0,
      swiperWidth: 0,
      swipeSyle: {},
      startX: 0,
      isScrolling: false,
      timer: 0,
    }
  },
  mounted() {
    this.swiperEl = this.$refs.swiper;
    if( this.swiperEl.children.length > 0 ) {
      this.initSwiperItemIfNeed();
    }
    //console.log(`mounted this.swipeItemCount: ${this.swipeItemCount}`)
  },
  updated() {
    this.initSwiperItemIfNeed();
    //console.log(`updated this.swipeItemCount: ${this.swipeItemCount}`)
  },
  methods: {
    initSwiperItemIfNeed() {
      if( this.swipeItemCount <= 0 ) {
        this.handleDom();
      }
      if( this.swipeItemCount > 1 ) {
        this.stopTimer();
        this.startTimer();
      }
    },
    handleDom() {
      const swiper = this.swiperEl;
      this.swiperWidth = swiper.offsetWidth;
      this.swipeSyle = swiper.style;
      this.swipeItemCount = swiper.children.length;
      //console.log(`handleDom, this.swipeItemCount: ${this.swipeItemCount}`)
      if( this.swipeItemCount > 1 ) {
        let cloneFirst = swiper.children[0].cloneNode(true);
        let cloneLast = swiper.children[this.swipeItemCount-1].cloneNode(true);
        swiper.insertBefore(cloneLast, swiper.children[0]);
        swiper.appendChild(cloneFirst);
        this.currentIndex = 1;
        //this.currentIndex = Math.min(this.defaultCurrentIndex + 1, this.swipeItemCount);
        this.setTransform(-this.currentIndex * this.swiperWidth);
      }
    },

    touchStart(event) {
      if( this.swipeItemCount <= 1 ) return;
      if( this.isScrolling ) return;

      this.stopTimer();

      this.startX = event.changedTouches[0].pageX;
    },
    touchMove(event) {
      if( this.swipeItemCount <= 1 ) return;
      if( this.isScrolling ) return;
      const x = event.changedTouches[0].pageX;
      let curPos = -this.currentIndex * this.swiperWidth + (x - this.startX);
      this.setTransition(0);
      this.setTransform(curPos);
    },
    touchEnd(event) {
      if( this.swipeItemCount <= 1 ) return;
      if( this.isScrolling ) return;
      const x = event.changedTouches[0].pageX;
      let offsetX = (x - this.startX);
      if( Math.abs(offsetX) >= this.moveRatio * this.swiperWidth ) {
        if( offsetX > 0 ) {
          this.currentIndex--;
        } else {
          this.currentIndex++;
        }
      }

      this.scrollContent(-this.currentIndex * this.swiperWidth);
      // 启动定时器自动切换
      this.startTimer();

      //console.log(`this.currentIndex: ${this.currentIndex}, swipeItemCount: ${this.swipeItemCount}`);
    },

    scrollContent(position) {
      this.isScrolling = true;

      // 滚动
      this.setTransition(this.animTime);
      this.setTransform(position);

      // 设置定时器校验位置
      this.checkPosition();

    },

    startTimer() {
      if( !this.autoSlid ) {
        return;
      }
      this.timer = window.setInterval(()=>{
        this.currentIndex++;
        this.scrollContent(-this.currentIndex*this.swiperWidth);
      }, this.interval);
    },

    stopTimer() {
      if( this.timer ) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
    },

    checkPosition() {
      window.setTimeout(()=>{
        this.setTransition(0);
        // D [A B C D] A
        if( this.currentIndex <= 0 ) {
          this.currentIndex = this.swipeItemCount;
        } else if( this.currentIndex > this.swipeItemCount ) {
          this.currentIndex = 1;
        }
        this.setTransform(-this.currentIndex * this.swiperWidth);
        //console.log(`checkPosition, this.currentIndex: ${this.currentIndex}`);

        this.$emit('transitionEnd', this.currentIndex-1);

        this.isScrolling = false;

      }, this.animTime);
    },

    setTransition(time) {
      this.swipeSyle.transition = `transform ${time}ms`;
      this.swipeSyle['-webkit-transition'] = `transform ${time}ms`;
      this.swipeSyle['-moz-transition'] = `transform ${time}ms`;
      this.swipeSyle['-o-transition'] = `transform ${time}ms`;
    },

    setTransform(postion) {
      this.swipeSyle.transform=`translate3d(${postion}px,0,0)`;
      this.swipeSyle['-webkit-transform']=`translate3d(${postion}px,0,0)`;
      this.swipeSyle['-ms-transform']=`translate3d(${postion}px,0,0)`;
    },

    beforeDestroy() {
      this.stopTimer();
    },
  },
  watch: {
    defaultCurrentIndex: function(newValue) {
      //console.log(`newValue: ${newValue}`)
      if( this.swipeItemCount > 1 ) {
        this.currentIndex = newValue+1;
        this.stopTimer();
        this.scrollContent(-this.currentIndex * this.swiperWidth);
        this.startTimer();
      }
    }
  }
}
</script>

<style scope>
  .swiper-container {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .swiper {
    display: flex;
    width: 100%;
  }
  .indicator {
    display: flex;
    position: absolute;
    bottom: 0;
    padding: 10px;
    width: 100%;
    justify-content: center;
  }
  .indicator-item {
    width: 10px;
    height: 10px;
    margin: 3px;
    border-radius: 10px;
    background: rgba(119, 117, 117, 0.5);
    flex-shrink: 0;
  }
  .active {
    background: white;
  }
</style>
