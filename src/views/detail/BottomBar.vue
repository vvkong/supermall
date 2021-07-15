<template>
  <div class="bottom-bar">

  </div>
</template>

<script>
export default {
  name: "bottomBar",
  props:{
    bottomBar: Object,
    default() {
      return {}
    }
  }

}
</script>
<style scoped>
  .bottom-bar {
    width: 100%;
    height: 49px;
    display: flex;
    background: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1f);
  }
</style>
