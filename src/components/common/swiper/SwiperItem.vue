<template>
  <div class="swiper-item">
    <slot>
    </slot>
  </div>
</template>
<script>
export default {
   name: "SwiperItem",
}
</script>
<style scoped>
  .swiper-item {
    width: 100%;
    flex-shrink: 0;
  }
  .swiper-item img {
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
