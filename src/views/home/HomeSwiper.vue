<template>
  <Swiper @transitionEnd="transitionEnd" class="swiper">
    <template v-slot:default>
      <SwiperItem>
        <img src="http://youimg1.c-ctrip.com/target/tg/004/531/381/4339f96900344574a0c8ca272a7b8f27.jpg">
      </SwiperItem>
      <SwiperItem>
          <img src="http://img.juimg.com/tuku/yulantu/140703/330746-140F301555752.jpg">
      </SwiperItem>
      <SwiperItem>
          <img src="http://pic1.nipic.com/2008-11-20/20081120122029174_2.jpg">
      </SwiperItem>
    </template>
    <template v-slot:indicator>
      <div v-for="(item, index) in 3" :key="index"
          class="indicator-item"
          :class="{active: index==currentIndex}">
        </div>
    </template>
  </Swiper>
</template>
<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    transitionEnd(index) {
      this.currentIndex = index;
    }
  },
}
</script>
<style scoped>
  .swiper {
    height: 200px;
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
