<template>
  <div id="app" :style="{ 'height': minHeight}">
    <router-view/>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'App',
  data () {
    return {
      minHeight: document.documentElement.clientHeight + 'px'
    }
  },
  mounted () {
    window.onresize = _.debounce(() => {
      this.minHeight = document.documentElement.clientHeight + 'px'
    }, 500)
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: alibaba, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666666;
  background-color: #fbfbfb;
  min-height: 100vh;
}
@media screen and (min-width: 576px) {
  #app {
    max-width: 576px;
    max-height: 100vh;
    margin: 0 auto
  }
}
</style>
