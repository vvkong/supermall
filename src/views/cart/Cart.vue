<template>
  <div class="cart">
    <NavBar class="cart-nav-bar">
      <template v-slot:center>
        <div class="cart-title">
          购物车({{cartLength}})
        </div>
      </template>
    </NavBar>
    <Scroller class="cart-scroller" ref="scroller">
      <CartListItem v-for="item in cartList" :key="item.iid" :itemInfo="item"
        class="cart-list-item">
      </CartListItem>
    </Scroller>
    <BottomBar class="cart-bottom-bar"></BottomBar>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
import Scroller from '@/components/common/scroll/Scroller.vue'
import CartListItem from './CartListItem'
import BottomBar from './BottomBar'

import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroller,
    CartListItem,
    BottomBar,
  },
  data() {
    return {
    };
  },
  activated() {
    // this.onCheckChange();
  },
  computed: {
    // cartLength() {
    //   return this.$store.state.productList.length;
    // }
    ...mapGetters(['cartLength','cartList']),
    // ...mapGetters({
    //   cartLength: 'cartLength',
    //   cartList: 'cartList'
    // }),

  },
  methods: {
    // selectAllChanged(selectAll) {
    //   if( this.cartList.length <= 0 ) {
    //     return;
    //   }
    //   if( selectAll ) {
    //     this.cartList.forEach(e => {
    //       e.checked = true;
    //     });
    //   } else {
    //     this.cartList.forEach(e => {
    //       e.checked = false;
    //     });
    //   }
    //   console.log('receive selectAllChanged: ' + selectAll)
    // },

  },
}
</script>
<style scoped>
  .cart {
    position: relative;
    height: 100vh;
  }
  .cart-scroller {
    position: absolute;
    top: 42px;
    bottom: 49px;
    width: 100%;
    z-index: 2;
  }
  .cart-nav-bar {
    background: rgb(221, 35, 128);
  }
  .cart-title {
    color: white;
    font-weight: 300;
  }
  .cart-bottom-bar {
    position: absolute;
    bottom: 49px;
    height: 40px;
    width: 100%;
  }
</style>
