<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
  .nav-bar {
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: sandybrown;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }
  .left{
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
  .right {
    width: 60px;
  }
</style>
