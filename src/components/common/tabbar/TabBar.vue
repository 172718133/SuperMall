<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="less" scoped>
  .tab-bar {
    height: 49px;
    display: flex;
    font-size: 14px;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
