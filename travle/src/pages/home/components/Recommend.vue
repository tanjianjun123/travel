<template>
  <div>
    <div  class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
      <p class="title-content">热销推荐</p>
      </div>
    <ul>
      <router-link 
        tag="li" 
        class="item border-bottom" 
        v-for="item of recommendList" 
        :key="item.id" 
        :to="'/detail/' + item.id"
        >
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
              <p class="item-title">{{ item.title }}</p>
              <p class="item-desc">{{ item.desc }}</p>
              <button class="item-button">查看详情</button>
            </div>
      </router-link>
      <!-- <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li> -->
    </ul>    
  </div>
    
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  }, 
  data() {
    return {

    };
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    display flex
    margin-top 0.2rem
    line-height 0.8rem
    background #eeeeee
    text-indent 0.2rem
    .title-img
      margin-left 0.1rem
      margin-top 0.1rem
      text-indent 0.1rem
      height 0.5rem
      line-height 0.5rem
    .title-content
      margin-left -0.1rem
      text-indent 0.2rem
      font-size 0.3rem
  .item
    display flex
    overflow hidden
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding 0.1rem
    .item-info
      flex 1
      padding 0.1rem
      min-width 0
      .item-title
          line-height 0.54rem
          font-size 0.32rem
          ellipsis()
      .item-desc
          line-height 0.4rem
          color #cccccc
          ellipsis()
      .item-button
          line-height 0.44rem
          margin-top 0.16rem
          background #ff9300
          padding 0 0.2rem
          border-radius 0.1rem  
          color #ffffff
</style>