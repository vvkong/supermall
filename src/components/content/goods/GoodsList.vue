<template>
  <div class="goods-list">
    <GoodsItem v-for="item in goodsList" :goods="item" :key="item.id"></GoodsItem>
  </div>
</template>
<script>
import GoodsItem from './GoodsItem'
export default {
  name: "GoodsList",
  props: {
    goodsList: {
      type: Array,
      default: function() {
        return [];
      }
    },
  },
  components: {
    GoodsItem,
  }
}
</script>
<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;
  }
</style>
