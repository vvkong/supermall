<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar",
  components: {
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .tab-bar {
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.05);
  }
</style>
