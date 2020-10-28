<template>
<div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
  <div class="shop-top">
    <img :src="shopInfo.shopLogo" alt="">
    <span class="title">{{shopInfo.name}}</span>
  </div>
  <div class="shop-middle">
    <div class="shop-middle-item shop-middle-left">
      <div class="sells-count">
        {{shopInfo.cSells | sellCountFilter}}
      </div>
      <div class="sells-text">总销量</div>
    </div>
    <div class="info-goods">
      <div class="goods-count">
        {{shopInfo.cGoods}}
      </div>
      <div class="goods-text">全部宝贝</div>
    </div>
  </div>
  <div class="shop-middle-item shop-middle-right">
    <table>
      <tr v-for="(item, index) in shopInfo.score" :key="index">
        <td>{{item.name}}</td>
        <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
        <td class="score" :class="{'score-more': item.isBetter}"><span>{{item.isBetter ? '高': '低'}}</span></td>
      </tr>
    </table>
  </div>
  <div class="shop-bottom">
    <div class="enter-shop">进店逛逛</div>
  </div>
</div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCountFilter(value){
        let result = value
        if (value < 10000) {
          result = (value / 10000).toFixed(1) + '万'
        }
      }
    }
  }
</script>

<style scoped>

</style>