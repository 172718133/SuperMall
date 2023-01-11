<template>
  <div>
    <NavBar>
      <div slot="center">我的</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'my-home',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

</style>
