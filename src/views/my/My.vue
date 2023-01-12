<template>
  <div>
    <NavBar>
      <div slot="center">个人中心</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'my-center',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

</style>
