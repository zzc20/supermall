<template>
  <TabBar>
    <TabBarItem path="/home" active-color="grey">
      <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" active-color="pink">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" active-color="green">
      <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" active-color="blue">
      <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem';
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>