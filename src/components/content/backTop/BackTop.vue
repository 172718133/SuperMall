<template>
  <div class="backtop">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'back-top',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .backtop {
    position: fixed;
    right: 8px;
    bottom: 54px;
    img {
      width: 60px;
      height: 60px;
    }
  }
</style>
