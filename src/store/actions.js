import {ADD_TO_CART, INCREMENT_PRODUCT_COUNT} from './mutation-types.js'
export default {
  addCart(context, payload) {
    return new Promise((resolve)=>{
      console.log(`${ADD_TO_CART}, ${INCREMENT_PRODUCT_COUNT}`)
      let oldProduct = context.state.productList.find((value)=>value.iid===payload.iid);
      if( oldProduct ) {
        //oldProduct.count += payload.count;
        //context.commit('incrementProductCount', oldProduct);
        context.commit(INCREMENT_PRODUCT_COUNT, oldProduct);
        resolve('商品数量加一成功');
      } else {
        //state.productList.push(payload);
        //context.commit('addToCart', payload);
        context.commit(ADD_TO_CART, payload);
        resolve('商品成功添加到购物车');
      }
    });
  }
}
