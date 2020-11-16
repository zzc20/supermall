<template>
<!--  <div class="content1">-->
<!--    <div class="pay">-->
<!--&lt;!&ndash;      <div><img src="~assets/img/detail/cart.png" alt=""></div>&ndash;&gt;-->
<!--      <div>购买</div>-->
<!--    </div>-->
<!--    <div class="pay">-->
<!--&lt;!&ndash;      <div><img src="~assets/img/detail/cart.png" alt=""></div>&ndash;&gt;-->
<!--      <div>购买</div>-->
<!--    </div>-->
<!--    <div class="pay">-->
<!--&lt;!&ndash;      <div><img src="~assets/img/detail/cart.png" alt=""></div>&ndash;&gt;-->
<!--      <div>购买</div>-->
<!--    </div>-->
<!--    <div class="cart" @click="cartClick">-->
<!--      <div><img src="~assets/img/detail/cart.png" alt=""></div>-->
<!--      <div>购物车</div>-->
<!--    </div>-->
<!--    <div class="pay">-->
<!--&lt;!&ndash;      <div><img src="~assets/img/detail/cart.png" alt=""></div>&ndash;&gt;-->
<!--      <div>购买</div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="bottom-bar">
    <div class="item-bar">
      我的
    </div>
    <div class="item-bar">
      你的
    </div>
    <div class="item-bar" @click="cartClick">
      购物车
    </div>
    <div class="item-bar">
      购买
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      cartClick() {
        this.$emit("cartClick")
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    position: relative;
    display: flex;
    z-index: 9;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
  }
  .item-bar {
    flex: 1;
  }
</style>