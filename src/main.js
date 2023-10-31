import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
//Axios
import axios from "axios";
import VueAxios from "vue-axios";
//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
//VueGoodTable
import VueGoodTablePlugin from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";
//VueGoodLinks
import VueGoodLinks from "vue-good-links";
// import the styles
import "vue-good-links/dist/vue-good-links.css";
// vue-sidebar-menu
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
// Toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
// Print
import print from "vue3-print-nb";
// Emailjs
import emailjs from "emailjs-com";
// Loading
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(VueAxios, axios);
app.use(VueGoodTablePlugin);
app.use(VueGoodLinks);
app.use(BootstrapVue3);
app.use(Toast);
app.use(print);
app.use(LoadingPlugin);
app.use(emailjs, {
  service_id: "service_mjs3ihv",
  template_id: "template_raapfvl",
  user_id: "Bv89uLo2HHwcmxNEW4DW7",
});
app.component("vue-sidebar-menu-akahon", VueSidebarMenuAkahon);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
