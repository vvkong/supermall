<template>
  <div>
    <div class="recommend-title">
      <span class="h-line"></span>
      <img src="https://s10.mogucdn.com/mlcdn/c45406/171220_6k3keaabag1c43e575hc7cfl2f35d_60x62.png" alt="">
      <span class="title-text">热卖推荐</span>
      <span class="h-line"></span>
    </div>
    <div class="recommend-wall">
      <WallItem class="wall-item" v-for="item in recommendWall"
        :key="item.item_id" :itemInfo="item"></WallItem>
    </div>
  </div>
</template>
<script>
import {getRecommendWall} from '@/network/detail.js'
import WallItem from './WallItem'

export default {
  name: "RecommendView",
  data() {
    return {
      recommendWall: [],
    }
  },
  components: {
    WallItem,
  },
  created() {
    getRecommendWall().then( res=>{
      this.recommendWall = res.data;
      //console.log(res);
    }).catch(err=>{
      console.log(err)
    });
  },
}
</script>
<style scoped>
  .recommend-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #666666;
    background: #eeeeee;
    padding: 5px;
  }
  .recommend-title>img {
    width: 15px;
    height: 15px;
    margin: 5px;
  }
  .h-line {
    width: 40px;
    height: 1px;
    background: #bbbbbb;
  }
  .recommend-wall {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-items: flex-start;
    justify-content: space-around;
    padding: 10px;
  }
  .wall-item {
    width: 30%;
    margin-bottom: 10px;
  }
</style>
