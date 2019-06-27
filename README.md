# 手把手带你使用Vue开发Travel
运行项目
    1. npm install
    2. npm run dev
# 开发工具: Visual Studio Code
# 常用插件:
    1. vue-beautify2.0.4
    2. Vue Snippets(vue-ls)
    3. Vue 2 Snippets
    4. Vetur
    5. language-stylus
    6. iview-snippets
    7. Bracket Pair Colorizer
    8. Chinese (Simplified) Language Pack for Visual Studio Code
    9. ESLint

# 1. 安装Node.js/NPM环境
    使用命令: node -v /npm -v来检查是否安装版本成功

# 2. 安装git来作为版本的控制
    git分支提交:
        # 1. 分支切換
        git pull 
        在分支上開發: git checkout index_swiper
    
        # 2. 分支合併
        git add .
        git commit -m ''
        git push 
        切換到master: git checkout master
        代碼合併: git merge origin/index_swiper
        git push

# 3. 在src/assert下创建styles文件夹, 将reset.css放进去用于基础样式的调试
    在main.js中引入 :
        import './assets/styles/reset.css'

# 4. 修改index.html文件中meta修改为的:
     <meta name="viewport" content="width=device-width,initial-scale=1.0,
  minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

# 5. 将border.css放到src/assert/styles文件夹用于解决一像素边框
     在main.js中引入 :
        import './assets/styles/border.css'

# 6. 安裝fastclick解决移动端延迟300毫秒
    使用命令:   npm install fastclick --save
     在main.js中引入 :
        import fastClick from 'fastclick'
        fastClick.attach(document.body)

# 7. 安装stylus和stylus-loader
    使用命令:   npm install stylus --save & npm install stylus-loader --save

# 8. 引入pages/home到路由
    在index.js中引入:
        // 其中(@可以到build/webpack.base.conf.js)看的出来指的是src，后面的Home.vue可以简写成Home
        import Home from '@/pages/home/Home' 
         routes: [
            {
            path: '/',
            name: 'Home',
            component: Home
            }
        ]
# 9. 开发Header部分
    新建components/Header.vue
    在Home.vue中注册Header组件:
          <home-header></home-header>
          import HomeHeader from "./components/Header";
          components: {
            HomeHeader,
          }

    1rem = html font-size = 50px
    布局技巧:
        采用flex (display flex):
            header-left & header-right的width都定死,
            header-input(flex 1)就会撑满剩下部分
    小技巧:
        1. 將常用的長文件路徑改成縮寫路徑
            在build/webpack.base.conf.js中的resolve追加:
            Example:
                src/assets/styles -> styles 寫法如下,
                'styles': resolve('src/assets/styles'),
        2. 创建通用的CSS样式: 创建varibles.styl放到src/assert/styles文件中用於解決常用的CSS樣式
            Example:
                  @import '~styles/varibles.styl' (样式引用css需要在前面加上"~",)
                  引用: background  $bgColor      

# 10. 开发Header-swiper(使用vue-awesome-swiper开发首页轮播图)
    // 这边使用2.6.7的版本进行开发(更多用法参照:https://github.com/surmon-china/vue-awesome-swiper)
    使用命令:  npm install vue-awesome-swiper@2.6.7 --save
    在main.js中引入 :
        import VueAwesomeSwiper from 'vue-awesome-swiper'
        import 'swiper/dist/css/swiper.css'
        Vue.use(VueAwesomeSwiper)

    新建components/Swiper.vue
    在Home.vue中注册Swiper组件:
        <home-swiper></home-swiper>
        import HomeSwiper from "./components/Swiper";
        components: {
            HomeSwiper
        }
    布局技巧:
        1. padding-bottom 26% 宽高比为26%
        2. 设置显示小标点,以及可轮播
            swiperOption: {
            pagination: '.swiper-pagination',
            loop: true
            }
        3. 强制将图标变为白色的
        .wrapper >>> .swiper-pagination-bullet-active
        background #ffffff !important 

# 11. 开发Header-Icon部分: 使用IconFont去下载图标并且引用(注册->下载->引入)
    将iconfont相关文件放到src/assets/styles/iconfont中    
    在main.js中引入 :
        import './assets/styles/iconfont.css'("注意修改iconfont.css中具体文件的位置")
    
    新建components/Icons.vue
    在Home.vue中注册Icons组件:
       <home-icons></home-icons>
       import HomeIcons from "./components/Icons";
       components: {
           HomeIcons
       }
    使用计算属性来计算页码(pages)实现轮播效果:
        制造一个二维数组:   

# 12. 开发Header-Recommend部分(热销推荐)
    新建components/Recommend.vue
    在Home.vue中注册Recommend组件:
       <home-recommend></home-recommend>
       import HomeRecommend from "./components/Recommend";
       components: {
           HomeRecommend
       }

# 13. 开发Header-Weekend部分(周末去哪儿)
    新建components/Weekend.vue
    在Home.vue中注册Weekend组件:
       <home-weekend></home-weekend>
       import HomeWeekend from "./components/Weekend";
       components: {
           HomeWeekend
       }

# 14. 使用axios发送请求来获取数据:
    使用命令:  npm install axios --save
     在Home.vue中引入 :
        import axios from "axios";
    由于外部只能访问static这个文件夹,所以在config/index.js中设置代理
    所有访问/api的请求都会被代理到/static/mock/
        proxyTable: {
        '/api': {
            target: 'http://localhost:8082',
            pathRewrite: {
            '^/api': '/static/mock'
            }
         }
        }

# 15. 复习点: 父组件向子组件传值(props)
    1. 先使用axios发送请求来获取数据:
    methods: {
        axios
        .get("/api/index.json")
        .then(this.getHomeInfoSucc)
        .catch(this.getHomeInfoFail());
        getHomeInfoSucc: function(res) {
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                console.log(JSON.stringify(data));
                // TODO 城市定位还需完善
                this.city = "北京";
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
        },
        getHomeInfoFail: function() {
            console.log("---------------> 获取数据失败 <-------------");
        }
    }

    2. 
     2.1 Home -> Header.vue
        Home:
            2.1.1 
                data() {
                    return {
                        city: "",
                    }
                  }
            2.1.2 
                <home-header :city="city"></home-header>
        Header:
            2.1.3 
                props: {
                    city: String
                }
    
    2.2 Home -> Swiper.vue
        Home:
            2.2.1 
                data() {
                    return {
                        swiperList: [],
                    }
                  }
            2.2.2 
                 <home-swiper :swiperList="swiperList"></home-swiper>
        Swiper:
            2.2.3
                props: {
                    swiperList: Array
                }
    
    2.3 Home -> Icons.vue
        做法和Home->Swiper.vue一致，注意数据的不同即可、
    
    2.4 Home -> Recommend.vue
        做法和Home->Swiper.vue一致，注意数据的不同即可、

    2.4 Home -> Weekend.vue
        做法和Home->Swiper.vue一致，注意数据的不同即可、

### Home -> City(使用Vue-Router进行组件间的通讯)
    套路和之前的一样一样的，参照Home.vue即可
    router/index.js :
        import City from '@/pages/city/City'
    export default new Router({
        routes: [{
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/city',
            name: 'City',
            component: City
        }]
    })
# 16. 开发City-Header部分
    创建Header组件，然后以局部组件的方式注入到City中
    这边需要使用vue-router来返回首页
        <router-link to="/"></router-link>
        注: 属性to就是配置的路由路径

# 17. 开发City-Search部分
    创建Search组件，然后以局部组件的方式注入到City中
    判断关键字Keyword是否为空来控制search-content是否显示
    为了实现city/components/Search.vue(keyword)和home/components/Header.vue(city)实现数据共享, 
    采用Vuex来实现, 这样做是为了实现多个组件共享状态, 避免单向数据流的简洁性被破坏:
        1. 多个视图依赖于同一状态.
        2. 来自不同视图的行为需要变更同一状态.
    Vue做法:
         使用命令:  npm install vuex --save
         main.js: import store from './strore/index'
         1. store/index.js:
            import Vue from 'vue'
            import Vuex from 'vuex'
            import state from './state'
            import mutations from './mutations'

            Vue.use(Vuex)

            export default new Vuex.Store({
                state: state,
                mutations: mutations
            })
        2. store/state.js:
            let city = '上海'
            try {
                if (localStorage.city) {
                    city = localStorage.city
                }
            } catch (e) {
                console.log(e);
            }

            export default {
                city: city
            }
        3. store/mutations.js:
            export default {
                changeCity: function (state, city) {
                    state.city = city;
                    try {
                        localStorage = city
                    } catch (e) {
                        console.log(e);
                    }
                    localStorage.city = city;
                }
            }
# 18. 开发City-List部分
    同理

# 19. 安装better-scroll(一个很强大的插件)
    使用命令:   npm install better-scroll --save
    // TODO 上拉刷新&下拉加载

# 20. 字母表&列表(兄弟之间的传值)
    Vuex的使用

# 21. 字母表优化
 # 21.1
    函数截流(无非就是使用定时器，来延迟我们的操作),原理: 检测定时器存在与否, 存在则等待执行完成, 清除定时器, 重新定义定时器.
    我这边的做法是定义一个变量timer为null, 为空的时候就清除定时器, 不为空的时候就重新定义定时器 

 # 21.2
    事件的调用(包含一个数字算法)

 # 22. 搜索功能实现
    和之前的差不多

 # 23. vuex
    同上
 # 24. localStorage
    同上
    感兴趣的可以去了解一下Cookie, localstorage, sessionstorage三者的区别

 # 25. vuex高级部分
    注意使用Getters的属性(类似Vue里面的计算属性)

# 26. Keep-alive性能优化
    注意生命函数的activated钩子函数

# 27. 详情页开发(Detail)

# 28. 开发Detail-Banner部分:
    # 28.1 动态路由

    # 28.2 图片的背景渐变色

# 29. Detail-Header渐隐渐现的实现
    利用好opacity属性

# 30. Detail-List的开发(递归组件的使用)

# 31. keep-alive拓展点
    App.vue:
        exclude="Detail,City"

# 32. Banner的动画效果的实现

# 33. 遗留的Bug
    1. 使用Keep-Alive带来页面缓存(二者不可兼得) -> Detail/Header
    2. 如果加上Keep-Alive的话, 将会出现动画不显示
    3. 上拉加载&下来刷新待完善
    4. Detail的功能需要完善补充
    5. 首页轮播一旦触发，那么自动轮播将会停止
