import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [
    {
      path: "/imagemin",
      name: "vite图片压缩插件",
      component: () => import("../components/Imagemin/index.vue")
    }
  ]
});

export default router;
