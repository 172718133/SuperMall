<template>
  <div class="wrapper" ref="wrapper">
    <ul>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
      <li>ffff</li>
    </ul>
    <NavBar>
      <div slot="center">分类</div>
    </NavBar>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'my-category',
  components: {
    NavBar
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 2
    })
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    height: 200px;
    background-color: antiquewhite;
    margin-top: 44px;
    overflow: hidden;
  }
</style>
