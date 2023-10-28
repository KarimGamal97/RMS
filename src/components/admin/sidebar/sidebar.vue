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
            link: "/users",
            name: "Users",
            tooltip: "Users",
            icon: "bx bx-user",
          },
          {
            link: "/suggestion",
            name: "Suggestion ",
            tooltip: "Suggestion ",
            icon: "bx bxs-file-blank",
          },
          {
            link: "/complaint",
            name: "Complaint ",
            tooltip: "Complaint ",
            icon: "bx bxs-file",
          },
          {
            link: "/Visitors",
            name: "Visitors",
            tooltip: "Visitors",
            icon: "bx bxs-user",
          },
          {
            link: "/subscriptions",
            name: "Subscriptions",
            tooltip: "Subscriptions",
            icon: "bx bxs-lock",
          },
          {
            link: "/statistics",
            name: "Statistics",
            tooltip: "Statistics",
            icon: "bx bxs-phone",
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
  