<template>
  <div class="check-button" :class="{checked: isChecked}" @click="onClick">
    <img src="~@/assets/image/common/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  model: {
    prop: 'checked',
    event: 'clickCheck'
  },
  props: {
    checked: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      isChecked: this.checked,
    }
  },
  methods: {
    onClick: function() {
      this.isChecked = !this.isChecked;
      // this.$emit('change', this.isChecked);
      this.$emit('clickCheck', this.isChecked);
    }
  },
  watch: {
    checked: function(newValue) {
      if( newValue === this.isChecked ) {
        return;
      }
      this.isChecked = newValue;
      console.log('checkbutton checked newValue: ' + newValue)
    }
  }
}
</script>
<style scoped>
  .check-button {
    width: 20px;
    height: 20px;
    border-radius: 50% 50%;
    background: #bbbbbb;
    border: 1px solid #bbbbbb;
  }
  .check-button img {
    width: 100%;
    height: 100%;
    border-radius: 50% 50%;
  }
  .checked {
    background: red;
    border: 1px solid red;
  }
</style>
