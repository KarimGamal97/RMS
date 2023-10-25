import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkView from "../views/WorkView.vue";
import DraftView from "../views/DraftView.vue";
import UserGuideView from "../views/UserGuideView.vue";
import PoliciesView from "../views/PoliciesView.vue";
import SupportView from "../views/SupportView.vue";
import SettingsView from "../views/SettingsView.vue";
import ReportView from "../views/ReportView.vue";
import AddWorkView from "../views/AddWorkView.vue";
import AdminView from "../views/AdminView.vue";
import LandingView from "../views/LandingView.vue";
import NotfoundLayout from "../layouts/NotfoundLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import LandingLayout from "../layouts/LandingLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";

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
      path: "/user-guide",
      name: "UserGuideView",
      component: UserGuideView,
      meta: { layouts: DefaultLayout },
    },
    {
      path: "/policies",
      name: "PoliciesView",
      component: PoliciesView,
      meta: { layouts: DefaultLayout },
    },
    {
      path: "/support",
      name: "SupportView",
      component: SupportView,
      meta: { layouts: DefaultLayout },
    },
    {
      path: "/settings",
      name: "SettingsView",
      component: SettingsView,
      meta: { layouts: DefaultLayout },
    },
    {
      path: "/landing",
      name: "LandingView",
      component: LandingView,
      meta: { layouts: LandingLayout },
    },
    {
      path: "/admin",
      name: "AdminView",
      component: AdminView,
      meta: { layouts: AdminLayout },
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
