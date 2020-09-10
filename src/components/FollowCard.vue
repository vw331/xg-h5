<template>
  <div class="follow-card-wrap">
    <div class="follow-card">
      <p class="font-bold">{{info.name}}</p>
      <button>+ 关注</button>
    </div>
    <p class="text-xs text-describe" v-html="info.describe"></p>
  </div>
</template>

<script>
export default {
  name: 'FollowCard',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data () {
    return { }
  }
}
</script>

<style lang="less" scoped>
  .follow-card-wrap {
    width: 110px;
  }
  .follow-card {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    padding: 10px 5px;
    background: url('../assets/img/follow-card.png') center center no-repeat;
    background-size: contain;
    p {
      color: #c53a2a;
      font-family: alibaba-bold;
      font-size: 14px;
      line-height: 1.75;
      font-weight: 600;
    }
    button {
      display: inline-block;
      width: 50px;
      font-size: 10px;
      line-height: 20px;
      border-radius: 4px;
      font-weight: 700;
      color: #ffffff;
      background-image: repeating-linear-gradient(#f3b96c, #c33326)
    }
  }
  .text-describe {
    font-size: 10px;
    padding: 0 5px;
    white-space: pre-line;
  }
</style>
