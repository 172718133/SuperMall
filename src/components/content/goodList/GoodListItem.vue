<template>
  <div class="goodsitem">
    <div class="img">
      <img :src="item.img" alt="">
    </div>
    <div class="main">
      <div class="title">{{item.title}}</div>
      <div class="price">￥{{item.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods-item',
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .goodsitem {
    margin: 4px 1%;
    width: 48%;
    box-shadow: 0 0 2px #ccc;
    .img{
      // width: 100%;
      img {
        // height: 200px;
        width: 100%;
      }
    }
    .main {
      height: 70px;
      padding: 4px 6px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 14px;
        color: #333;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .price {
        color: red;
      }
    }
  }
</style>
