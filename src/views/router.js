import { createWebHashHistory, createRouter } from "vue-router";

import HomeThreads from "./HomeThreads.vue";
import Post from "./Post.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

const routes = [
  { path: '/', component: HomeThreads },
  { path: '/post', component: Post },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})