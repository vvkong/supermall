<template>
  <div>
    <div class="comment-title-bar">
      <span class="">评价({{commentInfo.cRate}})</span>
      <span class="span-expend"></span>
      <div class="comment-score-container">
        <span class="comment-score-label">评分</span>
        <span class="comment-score">{{commentInfo.cScore}}</span>
        <img class="arrow-right" src="~@/assets/image/common/arrow-right.svg" alt="">
      </div>
    </div>
    <div class="rate-tags">
      <template v-for="(item, index) in commentInfo.rateTags">
        <span v-if="index<4" class="rate-tag" :key="item.value">
          {{item.value}}({{item.num}})
        </span>
      </template>
    </div>
    <RateSwiper :rateList="commentInfo.list"></RateSwiper>

  </div>
</template>
<script>
import RateSwiper from './RateSwiper'

export default {
  name: "CommentView",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  components: {
    RateSwiper,
  },
  created() {
    console.log(this.commentInfo)
  },
}
</script>
<style scoped>
  .comment-title-bar {
    font-size: 13px;
    color: #333333;
    margin: 10px 0 10px 10px;
    display: flex;
    align-items: center;
  }

  .span-expend {
    flex: 1;
  }
  .comment-score-container {
    font-size: 11.5px;
    display: inline-flex;
    align-items: center;
  }
  .comment-score-label {
    font-size: 0.9em;
  }
  .comment-score {
    color: red;
    padding-left: 2px;
  }
  .arrow-right {
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
  }
  .rate-tags {
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    overflow: auto;
  }
  .rate-tag {
    font-size: 9.3px;
    background: #fff0f0;
    padding: 3px 4px;
    margin-right: 5px;
  }
  .rate-infos {
    align-items: center;
    margin: 10px;
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
  }
</style>
