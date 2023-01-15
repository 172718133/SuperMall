<template>
  <div>
    <div class="recommend">
      <div class="item" v-for="item in recommend" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div class="text">{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .recommend {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 16px 6px 30px;
    border-bottom: 10px solid #eee;
  }
  .item {
    a {
      text-align: center;
      img {
        width: 70px;
        height: 70px;
        margin-bottom: 4px;
      }
      .text {
        font-size: 14px;
      }
    }
  }
</style>
