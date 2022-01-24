import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/coin/:id",
    name: "coin-detail",
    component: CoinDetail,
  },
  {
    path: "/error",
    name: "error",
    component: Error,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/Error",
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
