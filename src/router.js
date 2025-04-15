import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  // Add more routes later (e.g., About, Products)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;