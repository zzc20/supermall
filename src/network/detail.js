import {request} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}


export class Goods {
  constructor(itemInfo, column, service) {
    this.title = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = column
    this.services = service
  }

}

// export class shop {
//   constructor(shopInfo) {
//
//   }
// }


// export function getDetail(iid) {
//   return request({
//     url: "/detail",
//     methods: "GET",
//     params: {
//       iid
//     }
//   });
// }