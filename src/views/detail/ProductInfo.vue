<template>
  <div class="product-info">
    <div v-if="'normalPrice' in productInfo" class="normal-price">
      <span class="currency">{{productInfo.normalPrice.currency}}</span>
      <span class="currency-value">{{productInfo.normalPrice.nowPrice}}</span>
      <span class="price-tag" :style="{background: tag.bgColor,color: tag.textColor}" v-for="tag in productInfo.normalPrice.priceTags" :key="tag.text">{{tag.text}}</span>
      <span class="span-extend"></span>
      <span class="sales">已售{{productInfo.normalPrice.sales}}</span>
    </div>
    <div class="promotion" v-if="'promotion' in productInfo">
      <span class="promotion-tag" :style="{backgroundImage: 'url('+promotion.bgImg+')',color: promotion.textColor}" v-for="promotion in productInfo.promotion.promotionV2.outersRealtime" :key="promotion.text">{{promotion.text}}</span>
      <span class="promotion-tag" :style="{backgroundImage: 'url('+promotion.bgImg+')',color: promotion.textColor}" v-for="promotion in productInfo.promotion.shopPromotion.outers" :key="promotion.text">{{promotion.text}}</span>
      <span class="span-extend"></span>
      <img class="coupon-arrow" :src="productInfo.promotion.promotionV2.promotionStyle.couponArrowImg">
    </div>
    <div v-if="'itemInfo' in productInfo" class="item-info">
      <span class="item-title">{{productInfo.itemInfo.title}}</span>
      <a class="item-link" :href="productInfo.itemInfo.pickforme.h5Link">
        <img :src="productInfo.itemInfo.pickforme.icon" alt="">
        <span>{{productInfo.itemInfo.pickforme.name}}</span>
      </a>
    </div>
    <div class="divider"></div>
    <div class="sku-info" v-if="'skuInfo' in productInfo">
      <span class="sku-selector-label">选择</span>
      <span class="sku-key">{{productInfo.skuInfo.styleKey}}</span>
      <span class="sku-key">{{productInfo.skuInfo.sizeKey}}</span>
      <span class="span-extend"></span>
      <img class="arrow-right" src="~@/assets/image/common/arrow-right.svg" alt="">
    </div>
    <div v-if="'itemServices' in productInfo">
      <div class="columns" v-if="'columns' in productInfo.itemServices">
        <span>{{productInfo.itemServices.columns[1].desc}}</span>
        <span class="span-extend"></span>
        <span>{{productInfo.itemServices.columns[2].desc}}</span>
      </div>
      <div class="services">
        <span class="label">服务</span>
        <span v-for="(service,index) in productInfo.itemServices.services" :key="service.name" class="service-item">
          <span v-if="index<3">{{service.name}}</span>
          <span class="service-divider" v-if="index<2">|</span>
        </span>
        <span class="span-extend"></span>
        <img class="arrow-right" src="~@/assets/image/common/arrow-right.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductInfo",
  props: {
    productInfo: {
      type: Object,
      default() {
        return {};
      }
    },
  },
  created() {
  },
  updated() {
    console.log(this.productInfo)
  },
}
</script>
<style scoped>
  .normal-price {
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .currency {
    padding-top: 5px;
    font-size: 10px;
  }
  .currency-value {
    font-size: 20px;
  }
  .price-tag {
    font-size: 12px;
    margin: 5px;
    padding: 2px;
  }
  .span-extend {
    flex: 1;
  }
  .sales {
    color: #888888;
    font-size: 12px;
  }
  .promotion {
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .promotion-tag {
    font-size: 10px;
    padding: 2px 3px 3px 3px;
    background-size: 100% 100%;
    margin-right: 5px;
  }
  .coupon-arrow {
    width: 50px;
    height: 20px;
    margin-right: -10px;
  }
  .item-info {
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .item-title {
    flex: 1;
    font-size: 15px;
  }
  .item-link{
    font-size: 11px;
    color: #888888;
    margin-left: 10px;
    height: 11px;
    background-color: #eeeeee;
    border-radius: 11px;
    padding: 5px 20px 5px 10px;
    display: flex;
    margin-right: -20px;
    align-items: center;
    text-decoration: none;
  }
  .item-link img {
    width: 11px;
    height: 11px;
    margin: 0;
    padding: 0;
  }
  .item-link span {
    padding-left: 2px;
  }
  .divider {
    height: 10px;
    background: #efefef;
  }
  .sku-info {
    display: flex;
    align-items: center;
    margin: 10px 0 10px 10px;
    font-size: 11px;
  }
  .arrow-right {
    width: 24px;
    height: 24px;
  }
  .sku-selector-label {
    color: #888888;
    margin-right: 5px;
  }
  .sku-key {
    margin-left: 3px;
  }
  .columns {
    display: flex;
    align-items: center;
    margin: 10px;
    font-size: 11px;
    color: #888888;
  }
  .services {
    display: flex;
    align-items: center;
    margin: 10px 0 10px 10px;
  }
  .label {
    font-size: 11px;
    color: #888888;
    margin-right: 5px;
  }
  .service-item {
    font-size: 11px;
  }
  .service-divider {
    margin: 0 4px;
    color: #888888;
  }
</style>
