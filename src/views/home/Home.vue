<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>
    <HomeComps :banners="banners"/>
    <HomeRecommend :recommends="recommends"/>
    <HomeFeature/>
    <TabControl class="tab-control"
                :titles="['流行', '最新', '精选']"
                @typeClick="typeClick"/>
    <GoodsList :goods="showGoods"/>



    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
    </ul>


  </div>




</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

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
        currentType: 'pop'
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
          console.log(res);

        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
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
</style>