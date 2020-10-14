<template>
  <NavBar><div slot="center">购物车</div></NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from "network/home"
  export default {
    name: "Home",
    components : {
      NavBar,
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;

      })
    }
  }
</script>

<style scoped>

</style>