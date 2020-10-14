<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    line-height: 44px;
    height: 44px;
    display: flex;
    box-shadow: 0 1px 2px rgba(100, 100, 100, .09);
  }
  .left,.right {
    width: 60px;
    background-color: seashell;
  }
  .center {
    background-color: pink;
    flex: 1;
    text-align: center;

  }

</style>