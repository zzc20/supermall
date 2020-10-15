<template>
  <div id="home">
    <NavBar><div slot="center">购物车</div></NavBar>
    <HomeComps :banners="banners"/>
    <HomeRecommend :recommends="recommends"/>
  </div>




</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeComps from "./childcomps/HomeComps";
  import HomeRecommend from "./childcomps/HomeRecommend";

  import {getHomeMultidata} from "network/home"
  export default {
    name: "Home",
    components : {
      NavBar,
      HomeComps,
      HomeRecommend
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;

      })
    }
  }
</script>

<style scoped>

</style>