<template>
  <div>
    <NavBar>
      <div slot="center">首页</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import { getHomeDataAPI } from '@/api/home.js'
export default {
  name: 'my-home',
  components: {
    NavBar
  },
  data () {
    return {
      banner: {},
      keyword: {},
      recommend: {}
    }
  },
  methods: {
    async getHomeData () {
      const { data: res } = await getHomeDataAPI()
      this.banner = res.data.banner
      this.keyword = res.data.keywords
      this.recommend = res.data.recommend
    }
  },
  created () {
    this.getHomeData()
  }
}
</script>

<style lang="less" scoped>

</style>
