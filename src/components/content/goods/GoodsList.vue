<template>
  <div class="goods-list">
    <GoodsItem v-for="item in goodsList" :goods="item" :key="item.id" @click.native="onItemClick(item)"></GoodsItem>
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
  },
  methods: {
    onItemClick(item) {
      this.$emit("onItemClick", item);
    }
  },
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
