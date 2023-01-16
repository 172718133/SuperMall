<template>
  <div class="tab-bar-item" @click="tabbarClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-s"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#7dc5eb'
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  // 计算属性
  computed: {
    isActive () {
      // 判断当前路由的路径是否包含子组件传过来的路径，包含的话返回值不等于-1
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    tabbarClick () {
      // 路由跳转，不能返回上一页
      this.$router.replace(this.path).catch(err => err)
    }
  }
}
</script>

<style lang='less' scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    img {
      width: 28px;
      height: 28px;
      vertical-align: middle;
      margin: 2px 0;
    }
  }
</style>
