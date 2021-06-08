<template>
  <div class="tabbar-item" @click="onClickItem">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="{color: isActive ? activeColor : '#000000'}"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    activeColor: {
      type: String,
      default: '#2198d9',
    },
    path: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      requried: true,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onClickItem() {
      if( this.isActive ) {
        return;
      }
      this.$router.replace(this.$props.path);
    },
  },
  created() {
  },

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    }
  }

}
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 10px;
    color: black;
  }

  .active {
    color: #2198d9;
  }
</style>
