<template>
  <div class="tab-control">
    <div class="tab" v-for="(text, index) in tabTitles" :key="index" @click="onItemClick(index)">
      <span :class="{active:currentIndex==index}">{{text}}</span>
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
    line-height: 45px;
    text-align: center;
  }
  .tab {
    flex: 1;
  }
  .tab span {
    padding: 5px 5px 8px;
  }
  .tab .active {
    border-bottom: 2px solid blue;
    color: blue;
  }
</style>
