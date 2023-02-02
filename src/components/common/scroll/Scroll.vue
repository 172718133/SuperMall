<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll-view',
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //   click: true,
    //   observeDOM: true
    // })
    // setTimeout(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //     click: true,
    //     observeDOM: true
    //   })
    // }, 100)
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        observeDOM: true
      })
    })
  }
}
</script>

<style lang="less" scoped>

</style>
