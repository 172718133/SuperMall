<template>
  <div>
    <NavBar>
      <div slot="center">购物车</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'my-cart',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

</style>
