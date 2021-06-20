<template>
  <div>
    <NavBar class="nav-bar">
      <template v-slot:center>
        <span>首页</span>
      </template>
    </NavBar>
    <HomeSwiper></HomeSwiper>
    <h1>Home</h1>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from '@/views/home/HomeSwiper'
export default {
  components: {
    NavBar,
    HomeSwiper,
  },

}
</script>

<style scoped>
  .nav-bar {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
  }

</style>
