<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg"/>
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    <span class="icon-font">{{this.bannerImgs.length}}</span>
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary 
                :imgs="bannerImgs" 
                v-show="showGallary"
                @close="handleGallaryClose"
            >
            </common-gallary>
        </fade-animation>
        
    </div>
    
</template> 

<script>

import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick: function() {
      this.showGallary = true;
    },
    handleGallaryClose: function() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height 0.6rem
            color #ffffff
            background-image linear-gradient(top,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size 0.32rem
                padding 0 0.2rem
            .banner-number
                padding 0 0.35rem
                line-height 0.32rem
                height 0.32rem
                border-radius 0.2rem
                background rgba(0, 0, 0 ,0.8)
                font-size 0.1rem
                margin-top 0.14rem
                margin-right 0.1rem
                .banner-icon
                    font-size 0.1rem
                .icon-font
                    font-size 0.2rem
</style>