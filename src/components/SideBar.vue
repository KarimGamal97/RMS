<template>
  <div>
    <VueSidebarMenuAkahon
      :isUsedVueRouter="true"
      @menu-item-clicked="fnRouteTo(link)"
      :is-menu-open="isMenuOpen.default"
      :menu-icon="menuIcon.default"
      :menu-title="menuTitle.default"
      :is-search="isSearch.default"
      :menu-items="menuItems"
      :is-exit-button="isExitButton.default"
      :is-logged-in="isLoggedIn.default"
      :menu-footer-text-color="menuFooterTextColor.default"
    />
  </div>
</template>

<script>
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

export default {
  name: "component.vue",
  components: { VueSidebarMenuAkahon },
  data() {
    return {
      isMenuOpen: {
        type: Boolean,
        default: true,
      },
      menuTitle: {
        type: String,
        default: "RMS",
      },
      menuIcon: {
        type: String,
        default: "bx bxs-castle",
      },
      // Menu items
      menuItems: [
        {
          link: "/dashboard",
          name: "Dashboard",
          tooltip: "Dashboard",
          icon: "bx bxs-grid-alt",
        },
        {
          link: "/work",
          name: "Works",
          tooltip: "My Work",
          icon: "bx bx-briefcase",
        },
        {
          link: "/draft",
          name: "Drafts ",
          tooltip: "Drafts ",
          icon: "bx bxs-file-blank",
        },
        {
          link: "/reports",
          name: "Reports ",
          tooltip: "Reports ",
          icon: "bx bxs-file",
        },
        {
          link: "/user-guide",
          name: "User Guide",
          tooltip: "User Guide",
          icon: "bx bxs-user",
        },
        {
          link: "/policies",
          name: "Privacy & Policies",
          tooltip: "Privacy & Policies",
          icon: "bx bxs-lock",
        },
        {
          link: "/support",
          name: "Support",
          tooltip: "Support",
          icon: "bx bxs-phone",
        },
        {
          link: "/settings",
          name: "General Settings",
          tooltip: "General Settings",
          icon: "bx bxs-cog",
        },
        {
          link: "/faq",
          name: "FAQ's",
          tooltip: "FAQ's",
          icon: "bx bx-question-mark",
        },
      ],
      // Search
      isSearch: {
        type: Boolean,
        default: false,
      },
      // Profile detailes
      profileImg: {
        type: String,
        default: "",
        // import(""),
      },
      profileName: {
        type: String,
        default: "",
      },
      profileRole: {
        type: String,
        default: "",
      },
      isExitButton: {
        type: Boolean,
        default: false,
      },
      isLoggedIn: {
        type: Boolean,
        default: false,
      },
      menuFooterTextColor: {
        type: String,
        default: "#F00",
      },
    };
  },
};
</script>

<style>
.sidebar {
  background-color: #34495e;
}
</style>
