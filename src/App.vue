<template>
  <div class="app_container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from '@/components/content/MainTabbar.vue'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/base.css';
</style>
