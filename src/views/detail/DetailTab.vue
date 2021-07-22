<template>
  <div class="detail-tab">
    <div class="detail-tab-item" v-for="(item,idx) in tabTitles"
      :key="item" @click="onClickTab(idx)">
      <span class="tab-text" :class="{'active-tab': idx==currentIndex}">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailTab",
  data() {
    return {
      tabTitles: ["图文详情", "商品参数","热卖推荐"],
      currentIndex: 0,
    }
  },
  methods: {
    onClickTab(idx) {
      this.currentIndex = idx;
      this.$emit('tab-click', idx);
    }
  },
}
</script>
<style scoped>
  .detail-tab {
    display: flex;
    height: 40px;
    align-items: center;
  }
  .detail-tab-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .active-tab {
    color: red;
    border-bottom: 1px solid red;
  }
  .tab-text {
    display: inline-block;
    height: 39px;
    line-height: 39px;
    padding: 0 4px;
  }
</style>
