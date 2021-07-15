<template>
  <div class="skubar-selector-container" ref="skubarSelectorOuter">
    <div class="skubar-selector"
        ref="skubarSelectorInner"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd">
      <CircleImage class="sku-item" v-for="(item,index) in skuBarInfo.list" :key="item.stockId" :imgSrc="item.image"
        @click.native="onClickItem(index)"
        :checked="defaultIndex===index"></CircleImage>
    </div>
  </div>
</template>
<script>
import CircleImage from './CircleImage'
export default {
  name: "SkuBarSelector",
  props: {
    skuBarInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    defaultIndex: {
      type: Number,
      default: 0,
    }
  },
  components: {
    CircleImage
  },
  data() {
    return {
    }
  },
  mounted() {
    this.outEl = this.$refs.skubarSelectorOuter;
    this.innerEl = this.$refs.skubarSelectorInner;
  },
  methods: {
    touchStart(e) {
      // e.stopPropagation();
      this.downX = e.touches[0].pageX;
    },
    touchMove(e) {
      // e.stopPropagation();
      let offset = e.touches[0].pageX - this.downX;
      let maxOffset = this.innerEl.offsetWidth - this.outEl.offsetWidth;
      offset = Math.min(0, offset);
      offset = Math.max(-maxOffset, offset);
      this.innerEl.style.left=offset+'px';
    },
    touchEnd() {
      //e.stopPropagation();
      //console.log(e);
    },

    onClickItem(index) {
      this.$emit('selectSkuEvent', index);
    }
  },
}
</script>
<style scoped>
  .skubar-selector-container {
    position: relative;
    overflow: hidden;
  }
  .skubar-selector {
    white-space: nowrap;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .sku-item {
    margin-right: 10px;
    width: 36px;
    height: 36px;
  }
</style>
