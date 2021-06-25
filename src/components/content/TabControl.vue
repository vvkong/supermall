<template>
  <div class="tab-control">
    <div class="tab" :class="{active:currentIndex==index}" v-for="(text, index) in tabTitles" :key="index" @click="onItemClick(index)">
      <span>{{text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    tabTitles: {
      type: Array,
      default: function() {
        return [];
      }
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    onItemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", this.currentIndex);
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
  },
}
</script>
<style scoped>
  .tab-control {
    display: flex;
    font-size: 15px;
    height: 45px;
    text-align: center;
    font-size: 13px;
    align-items: center;
    background: white;
  }
  .tab {
    flex: 1;
  }
  .tab span {
    padding: 5px 5px 6px;
    border-bottom: 2px solid white;
  }
  .active span {
    border-bottom-color:blue;
    color: blue;
  }
</style>
