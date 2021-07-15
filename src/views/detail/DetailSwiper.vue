<template>
  <Swiper class="swiper" ref="swiper"
    :defaultCurrentIndex="defaultCurrentIndex">
    <SwiperItem v-for="banner in banners" :key="banner.image">
      <a :href="banner.link"><img :src="banner.image"></a>
    </SwiperItem>
  </Swiper>
</template>
<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default: function() {
        return [];
      }
    },
    defaultCurrentIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    }
  },
}
</script>
<style scoped>
  .swiper {
    width: 100%;
  }
</style>
