<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>

    <TabControl class="tab-control"
                :titles="['-pop-', '-new-', '-sell-']"
                @typeClick="typeClick"
                ref="tabControl01"
                v-show="isTabFixed"/>
    <BScroll class="bs-height"
             ref="scroll"
             :proto-type-num="3"
             @scroll="contentScroll"
             :isPull-up-load="true"
             @pullingUp="loadMore"
             @swiperFinished="swiperFinished"
             >
      <!--  @pullingUp="loadMore"-->
      <HomeSwiper :banners="banners"
                  @swiperFinished="swiperFinished"/>
      <HomeRecommend :recommends="recommends"/>
      <HomeFeature/>
      <TabControl class="tab-control"
                  :titles="['-pop-', '-new-', '-sell-']"
                  @typeClick="typeClick"
                  ref="tabControl02"/>
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

  import HomeSwiper from "./childcomps/HomeSwiper";
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
      HomeSwiper,
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
        isBackTopShow: false,
        saveY: null,
        offsetTopNum: 0,
        isTabFixed: false
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
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getCurrentY()
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
         this.$refs.tabControl01.currentIndex = index
         this.$refs.tabControl02.currentIndex = index
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
        //1. 当 y值大于1000显示backtop图标
        this.isBackTopShow = -position.y > 1000
        //2. 当y值大于this.offsetTop的时候 tabControl吸顶
        this.isTabFixed = -position.y > this.offsetTopNum
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()
      },

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
          // console.log(res.data);

        })
      },
      swiperFinished() {
        // this.$refs.scroll.refresh();
        // 4.获取元素的offsetTop    所有的组件都有这个元素属性$el
        this.offsetTopNum = this.$refs.tabControl02.$el.offsetTop

        // console.log(this.$refs.tabControl01.$el.offsetTop);
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