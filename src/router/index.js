import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import axios from 'axios'

Vue.use(VueRouter)
Vue.prototype.$axios = axios
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    component: () => import(/* webpackChunkName: "subject */ '../views/Subject.vue')
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
