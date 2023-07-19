import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "学习提升",
      component: () => import("../views/Home/index.vue")
    },
    {
      path: "/imagemin",
      name: "vite图片压缩插件",
      component: () => import("../views/Imagemin/index.vue")
    }
  ]
});

export default router;
