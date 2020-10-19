<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "BScroll",
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      protoTypeNum: {
        type: Number,
        default() {
          return 0
        }
      },
      isPullUpLoad: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    mounted() {
      //1. 创建scroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.protoTypeNum,
        pullUpLoad: this.isPullUpLoad
      })
      //2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })
      //3. 监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })

    },
    methods: {
      scrollTo(x, y, time) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(0, 0, 600)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        // console.log('refresh');  //已经测试成功
        this.scroll && this.scroll.refresh()

      }
    }
  }
</script>

<style scoped>

</style>