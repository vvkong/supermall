<template>
  <Swiper class="rate-swiper" ref="swiper" :showIndicator="false" :autoSlid="false">
    <SwiperItem v-for="rateInfo in rateList" :key="rateInfo.rateId">
      <RateInfoItemView :rateItemInfo="rateInfo"></RateInfoItemView>
    </SwiperItem>
  </Swiper>
</template>
<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
import RateInfoItemView from './RateInfoItemView'
export default {
  name: "RateSwiper",
  props: {
    rateList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
    RateInfoItemView,
  }
}
</script>
<style scoped>
  .rate-swiper {
    position: relative;
  }
</style>
