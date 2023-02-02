<template>
  <div class="home">
    <nav-bar>
      <div slot="center">首页</div>
    </nav-bar>
    <scroll class="scrollview">
        <swiper>
          <swiper-item v-for="item in banner" :key="item.title">
            <a :href="item.link">
              <img :src="item.image" alt="">
            </a>
          </swiper-item>
        </swiper>
        <recommend :recommend="recommend" />
        <feature-view></feature-view>
        <tab-control class="tabcontrol" :title="['流行', '新款', '精选']" @tabClick='tabClick'></tab-control>
        <good-list :goods="showGoods"></good-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import { Swiper, SwiperItem } from '@/components/common/swiper'
import Scroll from '@/components/common/scroll/Scroll.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodList from '@/components/content/goodList/GoodList.vue'

import Recommend from './comps/RecommendView.vue'
import FeatureView from './comps/FeatureView.vue'

import { getHomeDataAPI, getHomeGoodsAPI } from '@/api/home.js'
export default {
  name: 'my-home',
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  components: {
    NavBar,
    Swiper,
    TabControl,
    SwiperItem,
    Recommend,
    FeatureView,
    GoodList,
    Scroll
  },
  data () {
    return {
      currentType: 'pop',
      // 轮播图
      banner: [],
      keyword: [],
      recommend: [],
      goods: {
        pop: {
          page: 0,
          list: [
            {
              img: 'https://img2.baidu.com/it/u=852675073,3277724787&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '衣服衣服衣服',
              price: 199
            },
            {
              img: 'https://img1.baidu.com/it/u=873303087,564502922&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子',
              price: 299
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            }
          ]
        },
        new: {
          page: 0,
          list: [
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img2.baidu.com/it/u=852675073,3277724787&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '衣服衣服衣服',
              price: 199
            },
            {
              img: 'https://img1.baidu.com/it/u=873303087,564502922&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子',
              price: 299
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            }
          ]
        },
        sell: {
          page: 0,
          list: [
            {
              img: 'https://img1.baidu.com/it/u=873303087,564502922&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子',
              price: 299
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img2.baidu.com/it/u=852675073,3277724787&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '衣服衣服衣服',
              price: 199
            },
            {
              img: 'https://img1.baidu.com/it/u=873303087,564502922&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子',
              price: 299
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img2.baidu.com/it/u=852675073,3277724787&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '衣服衣服衣服',
              price: 199
            },
            {
              img: 'https://img1.baidu.com/it/u=873303087,564502922&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子',
              price: 299
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img2.baidu.com/it/u=852675073,3277724787&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '衣服衣服衣服',
              price: 199
            },
            {
              img: 'https://img1.baidu.com/it/u=873303087,564502922&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子裤子',
              price: 299
            },
            {
              img: 'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '鞋子鞋子鞋子鞋子鞋子鞋子鞋子',
              price: 399
            },
            {
              img: 'https://img2.baidu.com/it/u=852675073,3277724787&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              title: '衣服衣服衣服',
              price: 199
            }
          ]
        }
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
    },
    // 子组件传过来的tabClick的点击事件
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    }
  },
  created () {
    this.getHomeData()
    // this.getHomeGoods('pop')
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
.tabcontrol {
  position: sticky;
  top: 44px;
}
.scrollview {
  height: calc(100vh - 93px);
  overflow: hidden;
  margin-top: 44px;
}
</style>
