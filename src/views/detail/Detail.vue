<template>
  <div class="detail">
    <NavBar class="navbar">
      <div slot="left" @click="$router.back()">＜</div>
      <div slot="center">
        <TabControl class="tabcontrol1"
                    ref="tabcontrol1"
                    :title="['商品', '参数', '评论', '推荐']">
        </TabControl>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
export default {
  name: 'good-detail',
  props: {
    id: {
      type: String
    }
  },
  components: {
    NavBar,
    TabControl
  }
}
</script>

<style lang="less" scoped>
  .navbar {
    background-color: #fff;
  }
</style>
