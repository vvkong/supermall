<template>
  <Swiper class="swiper">
    <SwiperItem v-for="banner in banners" :key="banner.link">
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
    }
  },
}
</script>
<style scoped>
  .swiper {
    height: 200px;
  }
</style>
