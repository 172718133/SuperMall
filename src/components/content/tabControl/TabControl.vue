<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in title" :key="index" @click="itemClick(index)">
      <span :class="index === currentIndex ? 'active' : ''">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    .tab-control-item {
      flex: 1;
    }
  }
  .active {
    padding: 6px 4px;
    color: var(--bgdc);
    border-bottom: 2px solid var(--bgdc);
  }
</style>
