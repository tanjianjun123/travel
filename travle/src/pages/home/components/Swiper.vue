<template>
<div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
    
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
      swiperList: Array
  },
  data() {
    return {
      swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 3000,
          speed: 3000,      

      }
    };
  },
  computed: {
      showSwiper: function () {
          return this.swiperList.length
      }
  }
};
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .wrapper >>> .swiper-pagination-bullet-active
        background $iconColor !important
    .wrapper >>> .swiper-pagination-bullet 
        width 0.12rem
        height 0.12rem
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 31.25%
        background #eeeeee
        .swiper-img
            width 100%
</style>