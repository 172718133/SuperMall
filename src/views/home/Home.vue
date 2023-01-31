<template>
  <div class="home">
    <NavBar>
      <div slot="center">首页</div>
    </NavBar>
    <Swiper>
      <SwiperItem v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
    <Recommend :recommend="recommend"/>
    <FeatureView></FeatureView>
    <TabControl class="tabcontrol" :title="['流行', '新款', '精选']"></TabControl>
    <ul>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
    </ul>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import { Swiper, SwiperItem } from '@/components/common/swiper'
import TabControl from '@/components/content/tabControl/TabControl.vue'

import Recommend from './comps/RecommendView.vue'
import FeatureView from './comps/FeatureView.vue'

import { getHomeDataAPI, getHomeGoodsAPI } from '@/api/home.js'
export default {
  name: 'my-home',
  components: {
    NavBar,
    Swiper,
    TabControl,
    SwiperItem,
    Recommend,
    FeatureView
  },
  data () {
    return {
      // 轮播图
      banner: [],
      keyword: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    }
  },
  methods: {
    // 获取首页数据的方法
    async getHomeData () {
      const { data: res } = await getHomeDataAPI()
      this.banner = res.data.banner.list
      this.keyword = res.data.keywords.list
      this.recommend = res.data.recommend.list
    },
    // 获取首页商品信息的方法
    async getHomeGoods (type) {
      const page = this.goods[type].page + 1
      const { data: res } = await getHomeGoodsAPI(type, page)
      // 使用...arr方法解构，将arr新增到数组中
      this.goods[type].list.push(...res.错误信息)
      this.goods[type].page += 1
    }
  },
  created () {
    this.getHomeData()
    this.getHomeGoods('pop')
  }
}
</script>

<style lang="less" scoped>
  .home {
    padding: 44px 0 49px 0;
  }
  .tabcontrol {
    position: sticky;
    top: 44px;
  }
</style>
