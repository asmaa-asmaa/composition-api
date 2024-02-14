import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "MyMain",
    path: "/",
    component: () => import("@/views/HomePage"),
    meta: {
      title: "Home Page",
    },
  },
  {
    name: "ShowTodos",
    path: "/show-todos",
    component: () => import("@/views/ShowTodos"),
    meta: {
      title: "show todos",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
