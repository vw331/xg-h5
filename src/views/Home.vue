<template>
  <div id="home" class="home">
    <div class="bottom mb-4">
      <button class="btn-entry mb-4"
        @click="() => { this.$router.replace('/question') }"
      >测试入口 ></button>
      <p class="text-sm">截至目前，已有 <strong class="font-md">{{count}}</strong> 名投资者找到了自己的投资门派</p>
      <p class="text-xs my-2">市场有风险&nbsp;&nbsp;&nbsp;&nbsp;投资需谨慎</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      count: parseInt(Math.random() * 10000)
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style lang="less" scoped>
  #home {
    &.home {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: flex-end;
      color: #ffffff;
      height: 100%;
      //max-height: 100vh;
      background: url('../assets/img/home.png') center center no-repeat;
      background-size: cover;
      background-color: #1d43c0
    }
    @keyframes animat {
      0%{ transform: scale(1); }
      50%{ transform: scale(1.1); }
      100%{ transform: scale(1); }
    }
    .btn-entry {
      animation: animat .6s infinite;
      display: inline-block;
      font-family: alibaba-heavy;
      font-size: 18px;
      line-height: 30px;
      font-weight: 700;
      padding: 6px 48px;
      border-radius: 30px;
      background-color: #e43641
    }
  }
</style>
