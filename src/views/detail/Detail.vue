<template>
  <div id="detail">
    <DetailNavBar/>
    <Scroll class="content" ref="scroll">
      <DetailSwiper :topImages="topImages"/>
      <DetailGoodsInfo :goods="baseGoods"/>
      <DetailShopInfo :shop-info="shopInfo"/>
      <DetailInfo :detail-info="detailInfo" @imgLoadFinished="imgLoadFinished"/>
    </Scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childcomps/DetailNavBar";
  import DetailSwiper from "./childcomps/DetailSwiper";
  import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";
  import DetailShopInfo from "./childcomps/DetailShopInfo"
  import DetailInfo from "./childcomps/DetailInfo";
  import Scroll from "components/common/bscroll/BScroll"

  import {getDetail, Goods} from "network/detail"

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailGoodsInfo,
      DetailShopInfo,
      DetailInfo,
      Scroll,

    },
    data() {
      return {
        iid: null,
        topImages: [],
        baseGoods: {},
        shopInfo: {},
        detailInfo: {}
      }
    },
    created() {
      //1. 获取iid
      this.iid = this.$route.query.iid;
      console.log(this.$route.query.iid);
      //2.请求详情数据
      getDetail(this.iid).then(res => {
        //1. 获取数据
        const data = res.result;
        //2.取出轮播图的数据
        this.topImages = data.itemInfo.topImages;
        this.title = data.itemInfo.title;
        console.log(res);
        //3.创建商品的对象
        this.baseGoods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        console.log(this.baseGoods);
        //4.创建商铺的对象
        this.shopInfo = data.shopInfo
        console.log(data.shopInfo);
        //5.
        this.detailInfo = data.detailInfo

      })
      //3. 请求。。。数据

    },
    // mounted() {
    //   this.$on("imgLoadFinished", ()=> {
    //     this.$refs.scroll.refresh()
    //   })
    // },
    methods: {
      imgLoadFinished() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 2;
  }
  .content {
    height: calc(100vh - 44px);
  }
</style>