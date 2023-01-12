<template>
  <div>
    <NavBar>
      <div slot="center">分类</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'my-category',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

</style>
