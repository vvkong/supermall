<template>
  <div v-if="isShow" class="toast">
    <span>{{message}}</span>
  </div>
</template>
<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: "",
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      message: '',
      isShow: false
    };
  },
  methods: {
    show(message, timeOut=2000) {
      if( !message ) {
        return;
      }
      this.isShow = true;
      this.message = message;
      setTimeout(()=>this.isShow=false, timeOut);
    }
  },
}
</script>
<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    padding: 8px 10px;
    color: white;
    z-index: 9999;
  }

</style>
