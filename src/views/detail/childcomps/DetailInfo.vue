<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-for="item in detailInfo.detailImage" >
      <div class="info-key">{{item.key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in item.list"
             :key="index"
             :src="item"
             @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$emit("imgLoadFinished")
      }
    }

  }
</script>

<style scoped>

</style>