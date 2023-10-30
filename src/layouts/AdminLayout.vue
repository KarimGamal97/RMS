<template>
  <span class="loader"></span>
  <div class="container-fluid" v-if="hide">
    <div class="row">
      <side-bar></side-bar>
      <div class="fixed-top-nav d-flex">
        <!-- Start Nav Options -->
        <div class="col-md-12 col-sm-12 p-2 d-flex justify-content-between">
          <div class="logo">
            <h3>Logo</h3>
          </div>
          <div class="fixed-nav-options">
            <button class="btn btn-danger">
              Log Out
              <font-awesome-icon icon="right-from-bracket" />
            </button>
          </div>
        </div>
        <!-- End Nav Options -->
      </div>
      <router-view />
      <footer class="footer-head">
        <div class="footer text-center">
          <p>
            Copy Rights &copy; {{ new Date().getFullYear() }} - RMS Powered By
            <a href="#" target="_blank" id="BugOff">BugOff</a>
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/admin/sidebar/sidebar.vue";

export default {
  data() {
    return {
      types: ["search"],
      hide: false,
    };
  },
  methods: {},
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.fixed-top-nav {
  background-color: #eee;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding: 5px;
  border-bottom: 2px solid #11101d;
}
.fixed-nav-options {
  display: flex;
  justify-content: end;
  align-content: center;
  align-items: center;
  gap: 30px;
}
.add-client {
  background-color: #11101d;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.add-client-link {
  color: #eee;
  text-decoration: none;
}

.search-bar:focus {
  outline: none;
}
.avatar-img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.full-screen,
.lang,
.add-client-icon {
  font-size: 20px;
  cursor: pointer;
  transition: var(--main-transition);
}
.full-screen:hover,
.lang:hover {
  color: #4ade80;
}

@media (max-width: 991px) {
  .search-bar {
    display: none;
  }
}
@media (max-width: 991px) {
  .fixed-nav-options {
    justify-content: center;
  }
}
.footer-head {
  font-size: 20px;
  font-weight: 600;
  background-color: #f1f1f1;
  padding: 10px;
  position: fixed;
  bottom: 0;
  right: 0;
}
footer p {
  text-align: center;
  margin: auto;
}
#BugOff {
  text-decoration: none;
}
</style>
