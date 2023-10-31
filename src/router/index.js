import { createRouter, createWebHistory } from "vue-router";
// Pages
import DashboardView from "../views/Dashboard/DashboardView.vue";
import WorkView from "../views/Work/WorkView.vue";
import DraftView from "../views/Draft/DraftView.vue";
import UserGuideView from "../views/User/UserGuideView.vue";
import PoliciesView from "../views/User/PoliciesView.vue";
import SupportView from "../views/User/SupportView.vue";
import SettingsView from "../views/User/SettingsView.vue";
import ReportView from "../views/Report/ReportView.vue";
import AddWorkView from "../views/Work/AddWorkView.vue";
import LandingView from "../views/LandingView.vue";
import EditWork from "../views/Work/WorkView.vue";
import ShowWork from "../views/Work/ShowWork.vue";
import FaqView from "../views/User/FaqView.vue";
import ContactView from "../views/User/ContactView.vue";
import LoginView from "../views/Login/LoginView.vue";
// Admin
import AdminView from "../views/Admin/AdminView.vue";
import Suggestion from "../components/admin/faqs/suggestion.vue";
import Complaint from "../components/admin/faqs/complaint.vue";
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
      path: "/work/show/:id",
      name: "ShowWork",
      component: ShowWork,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/faq",
      name: "FaqView",
      component: FaqView,
      meta: { layouts: DefaultLayout, role: "user" },
    },
    {
      path: "/contact",
      name: "ContactView",
      component: ContactView,
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
