<template>
  <NavBar>
    <template v-slot:left>
      <img class="nav-left" src="~@/assets/image/common/back.svg" @click="clickBack">
    </template>
    <template v-slot:center>
      <div class="title-container">
        <div class="title-item"
          :class="{active: currentIndex==index}"
          v-for="(title, index) in titles" :key=title
          @click="clickItem(index)"
        >{{title}}</div>
      </div>
    </template>
  </NavBar>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ['商品','参数','推荐','评论'],
      currentIndex: 0,
    }
  },
  methods: {
    clickBack() {
      this.$router.back();
    },
    clickItem(index) {
      this.currentIndex = index;
    }
  },
}
</script>
<style scoped>
  .nav-left {
    width: 20px;
    height: 20px;
    padding: 10px;
    color: black;
  }
  .title-container {
    display: flex;
    text-align: center;
  }
  .title-item {
    flex: 1;
  }
  .active{
    color: blue;
  }
</style>
