<template>
  <div class="goodslist">
    <GoodsItem v-for="(item, index) in goods" :key="index" :item="item"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from '@/components/content/goodList/GoodListItem.vue'
export default {
  name: 'goods-list',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style lang="less" scoped>
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    // justify-content: space-around;
  }
</style>
