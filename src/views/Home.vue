<template>
  <div>
    <NavBar class="nav-bar">
      <template v-slot:center>
        <span>首页</span>
      </template>
    </NavBar>
    <h1>Home</h1>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  components: {
    NavBar,
  }
}
</script>

<style scoped>
  .nav-bar {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
  }
</style>
