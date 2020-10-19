<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>
    <BScroll class="bs-height"
             ref="scroll"
             :proto-type-num="3"
             @scroll="contentScroll"
             :isPull-up-load="true"
             >
      <!--             @pullingUp="loadMore"-->
      <HomeComps :banners="banners"/>
      <HomeRecommend :recommends="recommends"/>
      <HomeFeature/>
      <TabControl class="tab-control"
                  :titles="['流行', '最新', '精选']"
                  @typeClick="typeClick"/>
      <GoodsList :goods="showGoods"/>
    </BScroll>
    <BackTop @click.native="backTop" ref="backTop" v-show="isBackTopShow"></BackTop>    <!--native监听原生事件对象 -->

  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import BScroll from "components/common/bscroll/BScroll"
  import BackTop from "components/content/backtop/BackTop";

  import HomeComps from "./childcomps/HomeComps";
  import HomeRecommend from "./childcomps/HomeRecommend";
  import HomeFeature from "./childcomps/HomeFeature"



  import {getHomeMultidata, getHomeGoods} from "network/home"
  export default {
    name: "Home",
    components : {
      NavBar,
      TabControl,
      GoodsList,
      BScroll,
      BackTop,
      HomeComps,
      HomeRecommend,
      HomeFeature,

    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isBackTopShow: false
      }
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata();
      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
    },
    mounted() {
      //3.监听item图片加载完成
      this.$bus.$on('imgLoadFinishedItem', () => {
        this.$refs.scroll.refresh();

      })
    },
    methods: {
      /**
       * 事件监听相关的代码
       */

      typeClick(index) {
         switch (index) {
           case 0:
             this.currentType = 'pop';
             break
           case 1:
             this.currentType = 'sell';
             break
           case 2:
             this.currentType = 'new';
             break
         }
       },
      backTop() {
        // this.$refs.wrapper.scroll.scrollTo(0, 0)
        console.log('点击');
        // this.$refs.scroll.scroll.scrollTo(0, 0, 600)
        //调用在scroll中封装好的scrollTo方法， 体现封装的思想
        this.$refs.scroll.scrollTo(0, 0, 600)
      },
      contentScroll(position) {
        // console.log(position);
        this.isBackTopShow = -position.y > 1000
      },
      // loadMore() {
      //   this.getHomeGoods(this.currentType)
      //   this.$refs.scroll.scroll.refresh()
      // },

      /**
       * 网络请求相关的代码
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
          // console.log(res);


        })
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;    /* viewport height*/
  }
  .home-nav {
    background-color: var(--color-tint);
    position: fixed;

    left: 0;
    right: 0;
    top: 0;

    z-index: 9;
  }
  .tab-control {
    position: sticky;
    background-color: #eee;
    top: 44px;
  }
  /*.bs-height {
    !*height: 300px;*!
    overflow: hidden;
    margin-top: 44px;
    height: calc(100% - 93px);
  }*/
  .bs-height {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>