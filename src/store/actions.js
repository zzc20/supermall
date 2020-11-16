import {
  COUNT_ADD,
  CART_ADD
} from './mustations-types'
export default {
  //将两个逻辑进行分解到mustations中，方便跟踪
  cartAdd(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(COUNT_ADD, oldProduct)
    }else {
      payload.count = 1
      // context.state.cartList.push(payload)
      context.commit(CART_ADD, payload)
    }
  }
}