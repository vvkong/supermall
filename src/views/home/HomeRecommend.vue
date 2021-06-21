<template>
  <div class="recommend">
    <div v-for="item in recommendData" :key="item.image" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <span>{{item.text}}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommendData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
  .recommend {
    display: flex;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 10px solid #efefef;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item a {
    display: flex;
    flex-flow: column;

    align-items: center;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
    border-radius: 70px;
  }
</style>
