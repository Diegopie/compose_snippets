import { createWebHistory, createRouter } from 'vue-router'

import Index from './components/Index.vue';
import Home from './components/Home.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;