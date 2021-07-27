<template>
  <div class="bottom-bar">
    <div class="tab">
      <img src="~@/assets/image/detail/shop.svg" alt="">
      <span>店铺</span>
    </div>
    <div class="v-line"></div>
    <div class="tab">
      <img src="~@/assets/image/detail/im.svg" alt="">
      <span class="im-text">客服</span>
    </div>
    <div class="v-line"></div>
    <div class="tab">
      <img src="~@/assets/image/detail/favor.svg" alt="">
      <span>收藏</span>
    </div>
    <div class="v-line"></div>
    <div class="btn cart-btn" @click="addCart">加入购物车</div>
    <div class="btn buy-btn">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "bottomBar",
  props:{
    bottomBar: Object,
    default() {
      return {}
    }
  },
  methods: {
    addCart() {
      this.$emit('addCart');
    }
  },

}
</script>
<style scoped>
  .bottom-bar {
    width: 100%;
    height: 42px;
    display: flex;
    background: white;
    border-top: 1px solid #eeeeee;
  }
  .tab {
    width: 52px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    font-size: 11px;
  }
  .tab img {
    width: 20px;
    height: 20px;
    margin-bottom: 1px;
  }
  .v-line {
    height: 100%;
    width: 1px;
    background: #eeeeee;
  }
  .im-text {
    color: rgb(241, 43, 92);
  }
  .btn {
    font-size: 12px;
    flex: 1;
    text-align: center;
    line-height: 42px;
  }
  .cart-btn {
    color: rgb(241, 43, 92);
    background: #ffecef;
  }
  .buy-btn {
    color: white;
    background: rgb(241, 43, 92);
  }
</style>
