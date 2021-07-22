<template>
  <div class="item-wall">
    <div class="image-container">
      <img :src="itemInfo.image" alt="" class="image">
    </div>
    <div class="title">{{itemInfo.title}}</div>
    <div>
      <span class="price">￥{{itemInfo.price}}</span>
      <span class="sales">{{itemInfo.itemSaleDesc}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "WallItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    }
  }
}
</script>
<style scoped>
  .item-wall {
  }
  .image-container {
    height: 135px;
    width: 100%;
    background: yellow;
    overflow: hidden;
  }
  .image {
    width: auto;
    height: 100%;
  }
  .title {
    font-size: 12px;
    color: #333333;
    overflow: hidden;
    margin-top: 5px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .price {
    color: red;
    font-size: 11px;
  }
  .sales {
    font-size: 11px;
    color: #666666;
    margin-left: 5px;
  }
</style>
