<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list 
          :hotCities="hotCities" 
          :cities="cities" 
          :letter="letter"
        >
        </city-list>
        <city-alphabet 
          :cities="cities"
          @change="handleLetterChange"  
        >
        </city-alphabet>
    </div>    
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    };
  },
  mounted: function() {
    console.log("-----------> mounted <--------------");
    
    this.getCityInfo();
  },
  created () {
    console.log("---------> created <------------ ");
    
  },
  methods: {
    getCityInfo: function() {
      axios
        .get("/api/city.json")
        .then(this.getCityInfoSucc)
        .catch(this.getCityInfoFail());
    },
    getCityInfoSucc: function(res) {
      res = res.data;
      console.log(res);
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    getCityInfoFail: function() {
      return;
    },
    handleLetterChange: function (letter) {
      this.letter = letter;
    }

  }
};
</script>

<style lang="stylus" scoped>
</style>