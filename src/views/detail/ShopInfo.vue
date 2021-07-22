<template>
  <div class="shop-info">
    <img class="shop-logo" :src="shopInfo.shopLogo" alt="">
    <div class="shop-infos">
      <div class="shop-name">{{shopInfo.name}}</div>
      <div class="star">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/200205_2eg19cl3528hj8ihbc21ci5l0k857_44x44.png" alt=""
          v-for="i in shopInfo.level" :key="i">
        <span class="v-line">|</span>
        <div class="shop-goods">{{shopInfo.saleDescV2}}</div>
      </div>
      <div><span class="goods-sells">累计销量{{shopInfo.cSells}}</span></div>
    </div>
    <div class="arrow-container">
      <span>进店</span>
      <img class="arrow-right" src="~@/assets/image/common/arrow-right.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },

}
</script>
<style scoped>
  .shop-info {
    width: 100%;
    position: relative;
    padding: 10px;
  }
  .shop-logo {
    border-radius: 5px;
    width: 52px;
    height: 52px;
    padding: 0;
    margin: 0;
    margin-right: 8px;
    vertical-align: top;
  }
  .shop-infos {
    display: inline-block;
    min-height: 52px;
  }
  .shop-name {
    font-size: 14px;
  }
  .v-line {
    font-size: 10px;
    color: #888888;
    margin: 0 8px;
  }
  .shop-goods {
    font-size: 10px;
    color: #888888;
  }
  .arrow-right {
    width: 24px;
    height: 24px;
  }
  .star {
    display: flex;
    margin-top: 3px;
    align-items: center;
  }
  .star img {
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
  .goods-sells {
    font-size: 10px;
    border: 1px solid gray;
    border-radius: 20px / 100%;
    display: inline-block;
    margin-top: 5px;
    padding: 1px 3px;
    color: red;
  }
  .arrow-container {
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 2;
  }
  .arrow-container > span {
    font-size: 13px;
    line-height: 24px;
  }
  .arrow-container > img {
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    vertical-align: top;
  }
</style>
