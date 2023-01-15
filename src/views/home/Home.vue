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
import Recommend from './comps/RecommendView.vue'
import FeatureView from './comps/FeatureView.vue'
import { getHomeDataAPI } from '@/api/home.js'
export default {
  name: 'my-home',
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    Recommend,
    FeatureView
  },
  data () {
    return {
      // 轮播图
      banner: [],
      keyword: [],
      recommend: []
    }
  },
  methods: {
    async getHomeData () {
      const { data: res } = await getHomeDataAPI()
      this.banner = res.data.banner.list
      this.keyword = res.data.keywords.list
      this.recommend = res.data.recommend.list
    }
  },
  created () {
    this.getHomeData()
  }
}
</script>

<style lang="less" scoped>
  .home {
    padding: 44px 0 49px 0;
  }
</style>
