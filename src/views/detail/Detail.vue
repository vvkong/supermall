<template>
  <div>
    <NavBar></NavBar>
    <div>Detail</div>
  </div>
</template>
<script>
import NavBar from './NavBar'
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      id: null,
    };
  },
  created() {
    console.log(this.$route);
    this.id = this.$route.params.id;
    console.log(this.id);
  },

}
</script>
<style scoped>

</style>
