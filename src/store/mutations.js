// export default {
//   addCart(state, payload) {
//     let oldProduct = state.productList.find((value)=>value.iid===payload.iid);
//     if( oldProduct ) {
//       oldProduct.count += payload.count;
//     } else {
//       state.productList.push(payload);
//     }
//   },

//   incrementProductCount(state, payload) {
//     payload.count++;
//   },
//   addToCart(state, payload) {
//     state.productList.push(payload);
//   }
// }
import {ADD_TO_CART, INCREMENT_PRODUCT_COUNT} from './mutation-types.js'
export default {
  addCart(state, payload) {
    let oldProduct = state.productList.find((value)=>value.iid===payload.iid);
    if( oldProduct ) {
      oldProduct.count += payload.count;
    } else {
      state.productList.push(payload);
    }
  },

  [INCREMENT_PRODUCT_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    state.productList.push(payload);
  }
}
