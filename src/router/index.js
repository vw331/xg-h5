import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Question from '../views/Question.vue'
import Result from '../views/Result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
    beforeEnter: (to, from, next) => {
      if (to.params.score) {
        next()
      } else {
        next({ name: 'Question', replace: true })
      }
    },
    props: route => ({ score: route.params.score })
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
