<template>
  <div class="cart-list-item">
    <CheckButton v-model="itemInfo.checked"></CheckButton>
    <img class="image" :src="itemInfo.image" alt="">
    <div class="item-info">
      <div class="title line-text">{{itemInfo.title}}</div>
      <div class="desc line-text">{{itemInfo.desc}}</div>
      <div class="flex">
        <span>￥{{itemInfo.price}}</span>
        <span>x{{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from './CheckButton'

export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton,
  },
  data() {
    return {
    }
  },
  methods: {
    // clickCheck() {
    //   this.itemInfo.checked = !this.itemInfo.checked;
    //   console.log('onCheckButtonClick:'+this.itemInfo.checked)
    //   // this.$emit('onCheckChange');
    // },
  },
}
</script>
<style scoped>
  .cart-list-item {
    display: flex;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid #eeeeee;
  }
  .image {
    width: 60px;
    height: 80px;
    border-radius: 5px;
    margin: 5px;
  }
  .item-info {
    width: 0;
    flex-grow: 1;
    height: 80px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  .title {

  }
  .line-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
</style>
