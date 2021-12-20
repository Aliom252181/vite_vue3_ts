import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

//https://next.router.vuejs.org/zh/guide/
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/login/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
