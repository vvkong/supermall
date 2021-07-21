<template>
  <div class="rate-item">
    <div class="rate-item-top">
      <img :src="rateItemInfo.user.avatar" alt="">
      <div class="rate-user-info">
        <div>
          <span class="uname">{{rateItemInfo.user.uname}}</span>
          <span v-for="tag in rateItemInfo.userTags"
            :key="tag.text"
            class="utag"
            :style="{color:tag.textColor, background:tag.bgStartColor}">
            {{tag.text}}
          </span>
        </div>
        <div class="time">{{createTime}}</div>
      </div>
    </div>
    <div class="rate-content">{{rateItemInfo.content}}</div>
  </div>
</template>
<script>
export default {
  name: "RateInfoItemView",
  props: {
    rateItemInfo: {
      type: Object,
      deafult() {
        return {};
      }
    }
  },
  computed: {
    createTime() {
      const date = new Date(this.rateItemInfo.created*1000);
      console.log(date.toString());
      console.log(this.rateItemInfo.created)
      return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
    }
  }
}
</script>
<style scoped>
  .rate-item {
    background: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    min-height: 70px;
  }
  .rate-item-top {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .rate-item-top img {
    width: 33px;
    height: 33px;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    margin-right: 5px;
  }
  .rate-user-info {

  }
  .uname {
    font-size: 13px;
    color: #333333;
  }
  .utag {
    font-size: 11px;
    margin: 5px;
    padding: 2px 3px;
    font-size: 10px;
  }
  .time {
    font-size: 11px;
    color: #888888;
    margin-top: 2px;
  }
  .rate-content {
    margin-top: 10px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

</style>
