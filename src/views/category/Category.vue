<template>
  <div class="wrapper" ref="wrapper">
    <div class="s" @click="aaa">sss</div>
    <NavBar>
      <div slot="center">分类</div>
    </NavBar>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import NavBar from '@/components/common/navbar/NavBar.vue'
import { debounce } from '@/common/utils.js'
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
  methods: {
    sss () {
      console.log('aasdasd')
    },
    aaa () {
      const ss = debounce(this.sss, 1000)
      ss()
    }
  },
  mounted () {
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //   probeType: 2
    // })
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    margin-top: 44px;
  }
</style>
