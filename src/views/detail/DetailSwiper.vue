<template>
  <Swiper class="swiper">
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
    }
  },
}
</script>
<style scoped>
  .swiper {
  }
</style>
