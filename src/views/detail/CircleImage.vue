<template>
  <img :src="imgSrc" alt="" class="ci" :style="{borderColor: checked?'red':'gray'}">
</template>
<script>
export default {
  name: "CircleImage",
  props: {
    imgSrc: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    }

  }
}
</script>
<style scoped>
  .ci {
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
  }
</style>
