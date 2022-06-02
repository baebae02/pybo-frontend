import { createRouter, createWebHistory } from 'vue-router';
import Intro from '../views/Intro';

const routes = [
  {
    path: '/intro',
    name: 'Intro',
    component: Intro,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
