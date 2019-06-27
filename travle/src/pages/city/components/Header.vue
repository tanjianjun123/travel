<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left">
                <div class="iconfont back-icon">&#xe624;</div>
            </div>
        </router-link>
        <div class="header-content">
            城市选择    
        </div>
    </div>    
</template>

<script>
export default {
  name: 'CityHeader',
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display flex
        position relative
        line-height $header-height
        background  $bgColor
        color #ffffff
        .header-left
            width 0.64rem
            float left
            color #ffffff
            .back-icon
                text-align center
                font-size .4rem
        .header-content
            flex 1
            margin-left -0.7rem
            text-align center
            height $header-height
            line-height $header-height
            font-size 0.32rem  
</style>