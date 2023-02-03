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
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  methods: {
    // 封装scrollTo方法，直接传入方法参数即可，不必再调用this.scroll.scrollTo
    scrollTo (x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // 封装scrollTo方法，直接调用pullingUp方法，不必再调用this.scroll.pullingUp
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
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
        observeDOM: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    })
  }
}
</script>

<style lang="less" scoped>

</style>
