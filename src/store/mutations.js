import {
  COUNT_ADD,
  CART_ADD
} from './mustations-types'
export default {

  //mustations唯一的目的是修改state中的状态    可以做一些跟踪
  //mustations中的每个方法尽可能完成的事件比较单一
  //当需要进行异步操作或者 多个逻辑判断的方法时放在actions中进行操作
  // cartMethods(state, payLoad) {
  //   // let oldProduct = null;
  //   // for (let item of state.cartList) {
  //   //   if (item.iid === payLoad.iid) {
  //   //     oldProduct = item
  //   //   }
  //   // }
  //   //数组的find方法 找到这个参数的条件  返回符合这个参数的条件
  //   // item => item.iid === payLoad.iid
  //   let oldProduct = state.cartList.find(item => item.iid === payLoad.iid)
  //   // let oldProduct = state.cartList.find(function (item) {
  //   //   if (item.iid === payLoad.iid) {
  //   //     console.log(item);
  //   //     return item
  //   //   }
  //
  //   // })
  //   //把加进来的商品的iid和已经加进来的payLoad的iid进行判断，
  //   //当商品的iid相同时将指针指向外面定义的商品，将这个商品的属性count并且在数量上 += 1
  //   //当商品的iid不相同时，将payLoad.count的数量赋值为1 并且将这个payLoad加到cartList这个数组购物车中
  //   if (oldProduct) {
  //     oldProduct.count += 1;
  //     // console.log('oldProduct');
  //     // console.log(oldProduct);
  //     // console.log('payLoad');
  //     // console.log(payLoad);
  //   } else {
  //     payLoad.count = 1;
  //     // console.log('payLoad');
  //     // console.log(payLoad);
  //     state.cartList.push(payLoad)
  //   }
  //   // let index = state.cartList.indexOf(payLoad);
  //   // if (index === -1) {
  //   //   let oldProduct = state.cartList[index]
  //   //   oldProduct.count += 1
  //   // } else {
  //   //   payLoad.count = 1
  //   //   state.cartList.push(payLoad)
  //   // }
  //
  //
  //
  // }

  [COUNT_ADD](state, payload) {
    payload.count ++
  },
  [CART_ADD](state, payload) {
    state.cartList.push(payload)
  }
}