<template>
    <div 
        class="list" 
        ref="wrapper"
    >
        <ul>
            <li class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </li>
            <li class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrapper" 
                        v-for="item of hotCities" 
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </li>
            <li class="area" 
                v-for="(item, key) of cities" 
                :key="key" 
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div 
                        class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";

let count = 1;
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  data() {
    return {};
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        //   console.log(element);
        this.scroll.scrollToElement(element);
      }
    }
  },
  mounted: function() {
    // 获取DOM节点
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  methods: {
      handleCityClick: function (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
  },
  computed: {
      ...mapState(['city'])
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
      &:before
        border-color #cccccc
      &:after
        border-color #cccccc
  .border-bottom
      &:before
          border-color #cccccc
  .list
      overflow hidden
      position absolute
      top 1.58rem
      left 0
      right 0
      bottom 0
    .title
        background #eeeeee
        line-height 0.55rem
        padding-left 0.2rem
        color #666666
        font-size 0.26rem
      .button-list
        overflow hidden
        padding 0.1rem 0.6rem 0.1rem 0.1rem
        .button-wrapper
            float left
            width 33.33%
            .button
                padding 0.1rem
                text-align center
                margin 0.1rem
                border 0.02rem solid #ccc
                border-radius 0.1rem
    .item-list
        .item
            line-height 0.76rem
            padding-left 0.2rem
</style>