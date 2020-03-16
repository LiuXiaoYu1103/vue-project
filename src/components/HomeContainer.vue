<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item) in lunbotuList" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'HomeContainer',
  data () {
    return {
      lunbotuList: []
    }
  },
  created () {
    this.getLunbotu()
  },
  methods: {
    getLunbotu () {
      // http://vue.studyit.io/api/getnewlist
      this.$http.get('http://www.liulongbin.top:3005/api/getprodlist').then(data => {
        const result = data.body
        if (result.status === 0 && result.message.length > 0) {
          console.log(result.message)
          this.lunbotuList = result.message
        } else {
          Toast('轮播图加载失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;
    // .mint-swipe-item:nth-child(1) {
    //   background-color: rebeccapurple;
    // }
    // .mint-swipe-item:nth-child(2) {
    //   background-color: green;
    // }
    // .mint-swipe-item:nth-child(3) {
    //   background-color: blue;
    // }

    .mint-swipe-item {
      &:nth-child(1) {
        background-color: brown;
      }
      &:nth-child(2) {
        background-color: pink;
      }
      &:nth-child(3) {
        background-color: hotpink;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>