<template>
    <div> 
      <div class="title">
        <div class="title-img">
          <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
        </div>
        <div class="title-content">周末去哪儿玩</div>
      </div>
      <ul>
        <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" >
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>  
    </div>
</template>



<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .title
    display flex 
    line-height 0.8rem
    background #eeeeee
    text-indent 0.1rem
    .title-img
      margin-top 0.1rem
      line-height 0.6rem
      height 0.6rem
    .title-content
      line-height 0.8rem
      height 0.8rem
      font-size 0.3rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
    padding .14rem .2rem .2rem .2rem
    .item-title
      line-height 0.54rem
      font-size 0.28rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      font-size 0.24rem
      color #616161
      white-space nowrap
      ellipsis()
    

</style>