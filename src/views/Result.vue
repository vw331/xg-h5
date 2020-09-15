<template>
  <div id="result" class="container">
    <div class="main-up">
      <img :src="result.banner" alt="">
    </div>
    <div class="main-down">
      <p class="text-sm mb-6 text-left text-black px-4">{{ result.evaluate.info }}</p>
      <div class="recommend-wrap mb-6">
        <div class="recommend-title-wrap">
          <div class="recommend-title"> 适合你的投资资讯 </div>
        </div>
        <div class="flex flex-row justify-between mt-4">
          <follow-card :info="result.recommend[0]" @onFollow="onFollow"></follow-card>
          <follow-card :info="result.recommend[1]" @onFollow="onFollow"></follow-card>
          <follow-card :info="result.recommend[2]" @onFollow="onFollow"></follow-card>
        </div>
      </div>
      <button class="btn-follow mb-6">一键关注 <span class="icon-touch"></span></button>
      <div class="flex flex-row justify-between mb-6">
        <button class="btn-normal ml-4" @click="() => { this.$router.replace('/question') }">再测一次</button>
        <button class="btn-normal btn-red mr-4" @click="share">喊好友测试</button>
      </div>
      <p class="text-blue text-xs">市场有风险  投资需谨慎</p>
    </div>
  </div>
</template>

<script>
import FollowCard from '../components/FollowCard'

const resultList = [
  {
    id: 'RS_1',
    banner: require('@/assets/img/p1.png'),
    style: { name: '趋势王者', person: '周宇' },
    evaluate: { name: '不以涨喜 不以跌悲', info: '投资基础功扎实，分析公司快准稳；理念清晰且坚定，有旁人难以企及的分析力。' },
    recommend: [
      { name: '机会提醒', describe: '第一视角把握市场\n动态挖掘投资机会！' },
      { name: '公告精选', describe: '最新上市公司公告\n公司利好利空早知道' },
      { name: '龙虎榜中榜', describe: '以图表数据说话\n让强势股现身' }
    ]
  },
  {
    id: 'RS_2',
    banner: require('@/assets/img/p2.png'),
    style: { name: '赛道先锋', person: '吴海锋' },
    evaluate: { name: '以柔克刚 借力打力', info: '注重内功的修养，崇尚内在价值，投资风格却自由灵活。思考方式和多数人不同，有着成熟的思考力。' },
    recommend: [
      { name: '昨夜今晨', describe: '每日9:00解读海内外市场重要资讯' },
      { name: '明日短线风口', describe: '兼顾价值和投机\n捕捉明日风口' },
      { name: '每日特供', describe: '先人一步洞悉市场走势与主线暗线' }
    ]
  },
  {
    id: 'RS_3',
    banner: require('@/assets/img/p3.png'),
    style: { name: '机会猎人', person: '苏照博' },
    evaluate: { name: '招式奇秀 险中求胜', info: '聪明的“技术派”，稳抓买卖点。拒绝忍受漫长的底部震荡之苦，直接享受价值回归拉升过程中的快乐。' },
    recommend: [
      { name: '涨价早知道', describe: '解读涨价背后\n的投资逻辑' },
      { name: '明日短线风口', describe: '兼顾价值和投机\n捕捉明日风口' },
      { name: '大资金动向', describe: '追踪主力动向\n挖掘投资机会' }
    ]
  }
]

export default {
  name: 'Result',
  components: { FollowCard },
  props: {
    score: { type: Number, required: true }
  },
  data () {
    return {

    }
  },
  methods: {
    share (e) {
      alert('分享')
    },
    onFollow (item) {
      console.log(item)
      this.$http.post('http://47.114.163.46:4000/api/test', { name: item.name })
        .then(res => {
          alert('关注成功')
        })
    }
  },
  computed: {
    result () {
      console.log(this.score <= 4)
      if (this.score >= 7) {
        return resultList[0]
      } else if (this.score <= 4) {
        return resultList[2]
      } else {
        return resultList[1]
      }
    }
  }
}
</script>

<style lang="less" scoped>
#result {
  &.container {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #d3edff
  }
  .main-up {
    min-height: 200px;
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
    }
    /*&::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:url('data:image/png;base64,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');
      background-position: center bottom;
      background-repeat: no-repeat;
      background-size: 100% auto;
    }*/
  }
  .main-down {
    flex: 1;
    padding: 10px;
    position: relative;
  }
  .recommend-wrap {
    position: relative;
    padding: 20px 15px;
    border-radius: 3px;
    text-align: center;
    min-height: 100px;
    box-shadow: inset 0px 0px 8px 2px #3c67f1;
    background-color: #ffffff;
  }
  .recommend-title-wrap {
    display: inline-block;
    position: absolute;
    top: -12px;
    left: 50%;
    z-index: 2;
    transform: translatex(-50%);
    &::before {
      content: '';
      position: absolute;
      left: -6px;
      width: 12px;
      height: 12px;
      background-color: black;
      z-index: -1;
      clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%)
    }
    &::after {
      content: '';
      position: absolute;
      right: -6px;
      width: 12px;
      height: 12px;
      background-color: black;
      z-index: -1;
      clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%)
    }
  }
  .recommend-title {
    display: inline-block;
    position: relative;
    padding: 0 20px;
    font-size: 16px;
    font-family: alibaba-heavy;
    line-height: 32px;
    color: #ffffff;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #244bed;
    clip-path: polygon(0 0,100% 0,calc(100% - 7px) 100%,7px 100%);
    &:after, &:before {
      width: 10px;
      text-align: center;
      content: '·';
      font-size: 22px
    }
  }
  .btn-follow {
    display: inline-block;
    width: 200px;
    line-height: 45px;
    font-size: 24px;
    //font-family: alibaba-heavy;
    font-weight: 700;
    outline: none;
    color: #ffffff;
    border-radius: 22.5px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    background-image: repeating-linear-gradient(#f67575, #e34343);
    box-shadow: 1px 3px 4px 1px rgba(0, 0, 0, .3);

    &:active {
      background-image: repeating-linear-gradient(#cf5959, #af3131);
      transform: translateY(1px)
    }
  }
  .btn-normal {
    display: inline-block;
    width: 100px;
    line-height: 30px;
    font-size: 12px;
    border-radius: 5px;
    outline: none;
    color: #ffffff;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    background-image: repeating-linear-gradient(#608cf6, #2d55e2);

    &:active {
      background-image: repeating-linear-gradient(#4c78dd, #1b39a8);
    }
  }
  .btn-red {
    background-image: repeating-linear-gradient(#f3b96c, #c33326)
  }
  @keyframes opacity2{
      0%{opacity:0}
      50%{opacity:.8;}
      100%{opacity:0;}
  }
  .icon-touch {
    position: relative;
    animation: 1.2s opacity2 0s infinite;
    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 30px;
      top: 0;
      left: 0;
      background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAxCAYAAAC/BXv3AAADMElEQVRYhc2YXWjOURzHP48987JS3ktY0yTS1sQozIWouSEUtTtFcyU3spSVG1wh7qRdCVHyEilEY7Y0zUvDzMzLpNC8NXu1n06dp/57+p///5zn+f8f+9ap5zkvv//3nPM7v7eEiBCCQmAdUA4UAxOBv8BHoBW4CzwIExIKRcTQSkTkjIgMSjhaRaQ6QFZoM02otfi4HxpFZH5URM5mSCKFPhFZli2RuixJpDAgIoUuRLzKug04H6BT74Am4DUwGVgCrAiY3wYscFXWpIj8NOzul4hsF5GEz04WicjFgJOxVuDUjx0GQd0iUmQh6Khh/SdXIrcNglY63HOTQUa5zfoxQD5Q6nNr94EGB5O039BfYbN4jLac01Mq4xm750BCoRkY1r+HPbKKbRYngT+GsR+G+ZV6A7eAXs/Yb2AQGAckdEP3hUPf0em0e+3zsQOlIvLWM6dLRMrS5uxOk9MhIjNd7cghYA3wAagFXnl2MR7oAqam7ewrMAfo9/QpB7ke6AaOAT0uJxLWKg0vQqEiE9/i92psMC1gToGljEDYEhkIGLNTxoiIxI4oiESymWQEMlLeeJO2PVeBoVwT6demfYtHoTv1821zEZTtsSo/VZ32quYClz3/S4AZcRMxrS8C9gAvgGf6lE4GSrI0OFsDDJofhgz9x7W8PO0eprgaNFfkGeZvBnYCHUCLDj+PENGrccFs4JRnvkrW9gGfc23QEob+XaPFshZ4idQA14FL2i7kEoNKY/NFpNlHww97Xk2V46txRbs6kQM6WUpHTUqjdZATK1SEpozOwoCPbAReap8SF94kQ2INhStAva6JmOxD1lBXc8JCyOo4SaCJ1AHn4vyILRGFKuDCaCCCLktcGw1EFDYAN/8Dj4SfiVfR1Z0cE+k1+Zq1kZQs7dET5PRUOeFhjoh8CfO+q4CnOSDSHkZEZejLddwZJxpsSuAKE4DntkUXRygXM8k2MOrVtfjOGIgcVPJtTyQFldE9AuZFROIxsJQM8prvQBlwIwIS9SMKfVkUV1QRuCWDaOy9iOwNKl1lChUiqJLXYmCWTi/HamEqGf+m0gXgCdCoT3Nkkg78A5K79D55QbfFAAAAAElFTkSuQmCC');
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat
    }
  }
  .text-blue {
    color: #2d55e2
  }
}
</style>
