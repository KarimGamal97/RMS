import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkView from "../views/WorkView.vue";
import DraftView from "../views/DraftView.vue";
import ReportView from "../views/ReportView.vue";
import AddWorkView from "../views/AddWorkView.vue";
import NotfoundLayout from "../layouts/NotfoundLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { layouts: DefaultLayout },
    },
    {
      path: "/work",
      name: "work",
      component: WorkView,
      meta: { layouts: DefaultLayout },
    },
    {
      path: "/draft",
      name: "draft",
      component: DraftView,
      meta: { layouts: DefaultLayout },
    },
    {
      path: "/reports",
      name: "Reports",
      component: ReportView,
      meta: { layouts: DefaultLayout },
    },
    {
      path: "/work/add",
      name: "AddWorkView",
      component: AddWorkView,
      meta: { layouts: DefaultLayout },
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      // component: NotfoundLayout,
      meta: { layouts: NotfoundLayout },
    },
  ],
});

export default router;