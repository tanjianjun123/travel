<template>
    <div>
       <home-header></home-header>
       <home-swiper :swiperList="swiperList"></home-swiper>
       <home-icons :iconList="iconList"></home-icons>
       <home-recommend :recommendList="recommendList"></home-recommend>
       <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ""
    };
  },
  mounted: function() {
    console.log("---------------> mounted");
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  methods: {
    // 使用axios发送GET请求
    getHomeInfo: function() {
      axios
        .get("/api/index.json?city=" + this.city)
        .then(this.getHomeInfoSucc)
        .catch(this.getHomeInfoFail());
    },
    getHomeInfoSucc: function(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        console.log(JSON.stringify(data));
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
    getHomeInfoFail: function() {
      console.log("---------------> 获取数据失败 <-------------");
    }
  },
  computed: {
    ...mapState(["city"])
  },
  activated: function() {
    if (this.lastCity != this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
    console.log("------------------>activated");
  }
};
</script>

<style lang="stylus" scoped>
</style>