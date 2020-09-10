<template>
  <div id="question" class="container">
    <form @submit.prevent="onSubmit">
      <h3 class="mb-4 font-bold">第{{showItem+1}}/{{questions.length}}题</h3>
      <section class="question-wrap">
        <transition-group name="slide-fade">
          <question-item
            v-for="(question, index) in questions"
            :key="question.id"
            :question="question"
            :index="index+1"
            @onSelect="onSelected"
            v-show="showItem == index"
          ></question-item>
        </transition-group>
      </section>
      <div sytle="min-height: 80px">
        <button class="btn-toggle" type="button"
          @click="next"
          v-if="this.showItem < questions.length-1"
        >下一题</button>
        <button class="btn-submit" type="submit"
          v-if="showSubmit"
        >测试结果</button>
      </div>
    </form>
  </div>
</template>

<script>
import QuestionItem from '@/components/QuestionItem'

const questions = [
  {
    id: 'Q1',
    title: '都说股市【7亏2平1赢】。你觉得【赢】靠的是什么？',
    banner: require('@/assets/img/banner1.png'),
    items: [
      { name: 'A.能把握市场情绪', value: 'A-3' },
      { name: 'B.会选股，买的低，拿的住', value: 'B-2' },
      { name: 'C.技术高，盘感好', value: 'C-1' },
      { name: 'D.有内幕消息', value: 'D-0' }
    ]
  },
  {
    id: 'Q2',
    title: '以下哪个原因可能让你买入一只股票？',
    banner: require('@/assets/img/banner2.png'),
    items: [
      { name: 'A.宏观经济和公司基本面都不错，牛市来了', value: 'A-3' },
      { name: 'B.从技术面上看已经突破，股价看涨', value: 'B-2' },
      { name: 'C.大资金流入，跟庄没错', value: 'C-0' },
      { name: 'D.觉得股票市价比其实际价值便宜', value: 'D-1' }
    ]
  },
  {
    id: 'Q3',
    title: '据说会买的是徒弟，会卖的是师傅，以下哪个原因可能让你卖掉一只股票？',
    banner: require('@/assets/img/banner3.png'),
    items: [
      { name: 'A.重仓该股的主力都在抛售股票', value: 'A-1' },
      { name: 'B.该公司所处的行业前景明显开始恶化', value: 'B-2' },
      { name: 'C.大市行情不错，是出货良机', value: 'C-2' },
      { name: 'D.企业经营出现了看不懂的变化', value: 'D-1' }
    ]
  }
]

export default {
  name: 'Question',
  components: { QuestionItem },
  data () {
    return {
      showItem: 0,
      questions,
      selected: {}
    }
  },
  methods: {
    next () {
      if (Object.keys(this.selected).length > this.showItem) {
        this.showItem = this.showItem + 1
      } else {
        alert('任选一项后进入下一题!')
      }
    },
    onSelected (select) {
      this.selected = Object.assign({}, this.selected, select)
    },
    onSubmit () {
      const score = Object.values(this.selected).reduce((total, next) => total + parseInt(next.split('-')[1]), 0)
      alert(`当前得分: ${score}`)
      this.$router.replace({
        name: 'Result',
        params: { score }
      })
    }
  },
  computed: {
    showSubmit: function () {
      return Object.keys(this.selected).length === this.questions.length
    }
  }
}
</script>

<style lang="less" scoped>
#question {
  &.container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: #ffffff;
    height: 100%;
    max-height: 100vh;
    background: url('../assets/img/main-bg.png') center bottom no-repeat;
    background-size: cover;
    background-color: #1d43c0
  }
  .question-wrap {
    flex: .7;
    margin-bottom: 30px
  }
  .btn-toggle, .btn-submit {
    display: inline-block;
    font-family: alibaba-heavy;
    font-size: 18px;
    line-height: 30px;
    font-weight: 700;
    padding: 6px 28px;
    border-radius: 30px;
    color: #ffffff;
    background-image: repeating-linear-gradient(#f3b96c, #c33326)
  }
  .slide-fade-enter {
      transform: translateX(10px);
      opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
}
</style>
