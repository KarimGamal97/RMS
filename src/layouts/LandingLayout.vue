<template>
  
  <form-wizard @on-complete="onComplete" style="width:100%;  padding:10px; background: #11101d !important;
  color: #fff !important;">
    <tab-content class="text-center" style="font-size: 20px;" title="مرحبا بك ">
      مرحبا بكم  
    </tab-content>
    <tab-content class="text-center" style="font-size: 20px;" title="السمسار" >
      السمسار اضغط هنا
      <p class="text-center" style="font-size: 20px;">
        <router-link to="/dashboard">Dashboard</router-link>
      </p>
      
    </tab-content>
    <tab-content class="text-center" style="font-size: 20px;" title="الادمن" >
      الادمن اضغط هنا
      <p class="text-center" style="font-size: 20px;">
      <router-link to="/admin">Admin</router-link>
      </p>
    </tab-content>
  </form-wizard>



  <scroll-top />

</template>

<script>
// vue3-form-wizard
import "vue3-form-wizard/dist/style.css";
import {FormWizard,TabContent} from "vue3-form-wizard";
import ScrollTop from "../components/ScrollTop.vue";
export default {
  components: { ScrollTop , FormWizard, TabContent, },
};
</script>

<style></style>











