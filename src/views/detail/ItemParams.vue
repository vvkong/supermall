<template>
  <div class="item-params">
    <div>
      <span class="title">商品详情</span>
    </div>
    <div v-if="'info' in itemParams" class="parm-info">
      <div v-for="key in keys" :key="key" class="parm-row">
        <div class="row-label">{{key}}</div>
        <div class="row-value">{{itemParams.info.set[key]}}</div>
      </div>
      <div class="parm-row">
        <span>查看全部&尺码表</span>
        <img src="~@/assets/image/common/arrow-right.svg" alt="" class="arrow">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemParams",
  props: {
    itemParams: Object,
    default() {
      return {};
    }
  },
  data() {
    return {
      keys: ['季节', '元素', '衣门襟', '下摆', '版型'],
    };
  },
  created() {
  }
}
</script>
<style scoped>
  .item-params {
    padding: 10px;
  }
  .title {
    font-size: 12px;
    color: #555555;
  }
  .parm-info {
    background: #f0f0f0;
    border-radius: 2px;
    padding: 10px;
    margin-top: 10px;
  }
  .parm-row {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 1.5;
    color: #999999;
  }
  .row-label {
    min-width: 100px;
  }
  .row-value {
    color: #333333;
  }
  .arrow {
    width: 24px;
    height: 24px;
  }
</style>
