import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import axios from 'axios'

Vue.use(VueRouter)
Vue.prototype.$axios = axios
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
	path: '/signup',
	name: 'SignUp',
	component: () => import('../views/auth/SignUp.vue')
  },
  {
	path: '/study',
	name: 'StudyInfo',
	component: () => import(/* webpackChunkName: "study" */ '../views/Study.vue')
  },
  {
    path: '/subject',
    name: 'Subject',
    component: () => import(/* webpackChunkName: "subject" */ '../views/study/Subject.vue')
  },
  {
    path: '/attendance',
    name: 'Attendance',
    component: () => import(/* webpackChunkName: "attendance" */ '../views/Attendance.vue')
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import(/* webpackChunkName: "intro" */ '../views/Intro.vue')
  },
  {
    path: '/subject/submit',
    name: 'SubjectSubmit',
    component: () => import(/* webpackChunkName: "subject-submit" */ '../views/study/SubjectSubmit.vue')
  },
  {
    path: '/subject/complete',
    name: 'SubjectComplete',
    component: () => import(/* webpackChunkName: "subject complete" */ '../views/study/SubjectComplete.vue')
  },
  {
    path: '/auth/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/auth/Logout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
