export default {
  addCart(state, payload) {
    let oldProduct = state.productList.find((value)=>value.iid===payload.iid);
    if( oldProduct ) {
      oldProduct.count += payload.count;
    } else {
      state.productList.push(payload);
    }
  },

  incrementProductCount(state, payload) {
    payload.count++;
  },
  addToCart(state, payload) {
    state.productList.push(payload);
  }
}
