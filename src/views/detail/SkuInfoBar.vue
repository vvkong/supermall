<template>
  <div class="sku-bar">
    <CircleImage v-show="topSrc.length>0" class="sku-item" :imgSrc="topSrc"
      :checked="currentIndex===-1"
      @click.native="onClickTop"></CircleImage>
    <span class="color-spec">{{skuBarInfo.labelV2}}</span>
    <SkuBarSelector class="sku-bar-right" :skuBarInfo="skuBarInfo"
      :defaultIndex="currentIndex"
      @selectSkuEvent="onSelectSkuEvent"></SkuBarSelector>
  </div>
</template>
<script>
import CircleImage from './CircleImage'
import SkuBarSelector from './SkuBarSelector'
export default {
  name: "SkuInfoBar",
  props: {
    skuBarInfo: {
      type: Object,
      default() {
        return {}
      },
    },
    topBanner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CircleImage,
    SkuBarSelector,
  },
  data() {
    return {
      currentIndex: -1,
    }
  },
  mounted() {
  },
  computed: {
    topSrc: function() {
      if( this.topBanner && this.topBanner.length > 0 ) {
        return this.topBanner[0].image;
      }
      return "";
    },
  },
  methods: {
    onClickTop() {
      this.currentIndex = -1;
      this.$emit('selectSkuEvent', -1)
    },
    onSelectSkuEvent(index) {
      this.currentIndex = index;
      this.$emit('selectSkuEvent', index)
    }
  },

}
</script>
<style scoped>
  .sku-bar {
    width: 100%;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    height: 58px;
    flex-flow: nowrap;
    align-items: center;
    display: flex;
  }
  .sku-item {
    width: 36px;
    height: 36px;
  }
  .color-spec {
    width: 30px;
    font-size: 12px;
    margin: 0 10px;
  }
  .sku-bar-right {
    flex: 1;
    height: 100%;
  }
</style>
