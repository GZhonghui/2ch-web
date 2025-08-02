import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'

import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: Post },
  { path: '/login', component: Login },
  {
    path: '/user/:id(\\d+)',
    component: Profile,
    props: (route: RouteLocationNormalized) => ({ id: Number(route.params.id) })
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router