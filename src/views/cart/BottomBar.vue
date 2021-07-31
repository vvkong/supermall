<template>
  <div class="bottom-bar">
    <div class="all-select">
      <CheckButton v-model="checkedAll" @clickCheck="onClickCheck"></CheckButton>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计 ￥{{sum}}
    </div>
    <div class="flex-extra"></div>
    <div class="btn-buy">
      去结算({{checkCount}})
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import CheckButton from './CheckButton.vue'
export default {
  name: "BottomBar",
  props: {
  },
  components: { CheckButton },
  data() {
    return {
      checkedAll: this.isSelectAll,
    };
  },
  methods: {
    onClickCheck(value) {
      console.log(value);
      this.cartList.forEach(v => {
        v.checked = value;
      });
    }
  },
  computed: {
    ...mapGetters(['cartList']),

    isSelectAll() {
      console.log('isSelectAll')
      return this.cartList.every((v)=>v.checked);
    },
    sum() {
      return this.cartList.filter((v)=>v.checked)
        .reduce((prev, cur)=>prev+cur.price*cur.count, 0).toFixed(2);
    },
    checkCount() {
      return this.cartList.filter((v)=>v.checked).length;
    },
  },

  watch: {
    isSelectAll: function(newValue) {
      this.checkedAll = newValue;
      console.log('bottombutton isSelectAll: ' + newValue)
    },

  }
}
</script>
<style scoped>
  .bottom-bar {
    display: flex;
    align-items: center;
    background: #ebebeb;
    z-index: 2;
  }
  .all-select {
    display: flex;
    align-items: center;
    padding: 0 5px;
    font-size: 13px;
  }
  .total-price {
    margin-left: 30px;
    font-size: 13px;
    color: rgb(238, 70, 58);
  }
  .flex-extra {
    flex: 1;
  }
  .btn-buy {
    padding: 0 20px;
    height: 100%;
    line-height: 40px;
    background: red;
    color: white;

  }
</style>
