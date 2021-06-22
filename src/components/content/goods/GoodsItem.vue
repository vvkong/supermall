<template>
  <div class="goods-item">
    <img :src="goods.image" alt="">
  </div>
</template>
<script>
export default {
  name: "GoodsItem",
  props: {
    goods: {
      type: Object,
      default: function(){
        return {};
      }
    }
  }

}
</script>
<style scoped>
  .goods-item{
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
</style>
