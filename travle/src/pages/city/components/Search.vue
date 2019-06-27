<template>
    <div>
        <div>
            <div class="search">
                <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
            </div>
        </div>
        <div 
            class="search-content" 
            ref="search"
            v-show="keyword"
        >
            <ul>
                <li 
                    class="search-item border-bottom"
                    v-for="item of this.list" 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                  {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData" style="text-align: center">无匹配数据</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  watch: {
    //函数截流处理
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      // 关键字为空，返回空列表
      if (this.keyword == "" || this.keyword == null) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          console.log("-------> " + i);
          this.cities[i].forEach(value => {
            // console.log("-----------------> " + JSON.stringify(value));
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  methods: {
    handleCityClick: function(city) {
      this.changeCity(city);
      this.$router.push("/");
      this.keyword = '';
    },
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },

};
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-bottom
      &:before
          border-color #cccccc
    .search
        height 0.72rem
        background $bgColor
        padding 0.01rem 0.12rem
        .search-input
            box-sizing border-box
            width 100%
            height 0.63rem
            line-height 0.63rem
            padding 0 0.2rem
            text-align center
            border-radius 0.09rem
            color #666666
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eeeeee
        .search-item
            line-height 0.76rem
            padding-left 0.2rem
            color #666
            background #ffffff
</style>