<template>
  <Swiper>
    <swiperItem v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad" alt="">
      </a>
    </swiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      // 进行图片的加载完的监控，将方法发射到父组件，最优的效率，只监听一次swiper的监听，方法用的是变量的true和false
      imgLoad() {
        if (!this.isLoad){
          this.$emit("swiperFinished")
          this.isLoad = true
          console.log("111");
        }
      }
    }
  }
</script>

<style scoped>

</style>