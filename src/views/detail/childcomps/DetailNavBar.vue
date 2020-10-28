<template>
  <NavBar class="nav-bar">
    <div slot="left" class="left" @click="itemClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="center">
      <div v-for="(item,index) in list"
           class="center-item"
           :class="{active: currentIndex === index}"
           @click="centerIndex(index)">
        {{item}}
      </div>
    </div>
  </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        list: ["商品", "参数", "评论", "推荐"],
        currentIndex: 0
      }
    },
    props: {

    },
    methods: {
      itemClick() {
        this.$router.back()
      },
      centerIndex(index) {
        this.currentIndex = index
      }
    }

  }
</script>

<style scoped>
  .nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .left img {
    padding: 10px;
  }
  .center {
    display: flex;
  }
  .center-item {
    flex: 1;
  }
  .active {
    color: red;
  }

</style>