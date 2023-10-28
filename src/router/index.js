import { createRouter, createWebHistory } from "vue-router";
// Pages
import DashboardView from "../views/DashboardView.vue";
import WorkView from "../views/WorkView.vue";
import DraftView from "../views/DraftView.vue";
import UserGuideView from "../views/UserGuideView.vue";
import PoliciesView from "../views/PoliciesView.vue";
import SupportView from "../views/SupportView.vue";
import SettingsView from "../views/SettingsView.vue";
import ReportView from "../views/ReportView.vue";
import AddWorkView from "../views/AddWorkView.vue";
import LandingView from "../views/LandingView.vue";
import EditWork from "../views/EditWork.vue";
import FaqView from "../views/FaqView.vue";
import LoginView from "../views/LoginView.vue";
// Admin
import AdminView from "../views/AdminView.vue";
import Suggestion from '../components/admin/faqs/suggestion.vue';
import Complaint from '../components/admin/faqs/complaint.vue';
// Layouts
import NotfoundLayout from "../layouts/NotfoundLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import LandingLayout from "../layouts/LandingLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import LoginLayout from "../layouts/LoginLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "DashboardView",
      component: DashboardView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/work",
      name: "work",
      component: WorkView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/draft",
      name: "draft",
      component: DraftView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/reports",
      name: "Reports",
      component: ReportView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/work/add",
      name: "AddWorkView",
      component: AddWorkView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/user-guide",
      name: "UserGuideView",
      component: UserGuideView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/policies",
      name: "PoliciesView",
      component: PoliciesView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/support",
      name: "SupportView",
      component: SupportView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/settings",
      name: "SettingsView",
      component: SettingsView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/work/edit/:id",
      name: "EditWork",
      component: EditWork,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/faq",
      name: "FaqView",
      component: FaqView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/",
      name: "LandingView",
      component: LandingView,
      meta: { layouts: LandingLayout },
    },
    {
      path: "/admin",
      name: "AdminView",
      component: AdminView,
      meta: { layouts: AdminLayout, role: "admin" },
    },
    {
      path: "/suggestion",
      name: "Suggestion",
      component: Suggestion,
      meta: { layouts: AdminLayout, role: "admin" },
    },
    {
      path: "/complaint",
      name: "Complaint",
      component: Complaint,
      meta: { layouts: AdminLayout, role: "admin" },
    },
    
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
      meta: { layouts: LoginLayout },
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
