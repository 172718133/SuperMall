<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="#7dc5eb">
      <img slot="item-icon" src="@/assets/img/tabbar/index.png" alt="">
      <img slot="item-icon-s" src="@/assets/img/tabbar/index-s.png" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="#7dc5eb">
      <img slot="item-icon" src="@/assets/img/tabbar/cate.png" alt="">
      <img slot="item-icon-s" src="@/assets/img/tabbar/cate-s.png" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="#7dc5eb">
      <img slot="item-icon" src="@/assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-s" src="@/assets/img/tabbar/cart-s.png" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/my" activeColor="#7dc5eb">
      <img slot="item-icon" src="@/assets/img/tabbar/mine.png" alt="">
      <img slot="item-icon-s" src="@/assets/img/tabbar/mine-s.png" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabbar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="less" scoped>
</style>
