<template>
  <div class="detail-info">
    <span>{{detailInfo.desc}}</span>
    <template v-if="'detailImage' in detailInfo">
      <img v-for="item in detailInfo.detailImage[0].list"
      :src="item" alt="" :key="item">
    </template>

  </div>
</template>
<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
}
</script>
<style scoped>
  .detail-info {
    display: flex;
    flex-flow: column;
    padding-top: 10px;
    color: #555555;
    font-size: 12px;
  }
  .detail-info span{
    padding: 10px;
    line-height: 1.2;
  }
  .detail-info img {
    padding: 0;
    margin: 0;
  }
</style>
