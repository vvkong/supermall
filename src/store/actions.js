export default {
  addCart(context, payload) {
    let oldProduct = context.state.productList.find((value)=>value.iid===payload.iid);
    if( oldProduct ) {
      //oldProduct.count += payload.count;
      context.commit('incrementProductCount', oldProduct);
    } else {
      //state.productList.push(payload);
      context.commit('addToCart', payload);
    }
  }
}
