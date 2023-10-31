<template>
  <div>
    <h1>This is Landing layout</h1>
    <button>
      <router-link to="/dashboard">Dashboard</router-link>
    </button>
    <scroll-top />
  </div>
</template>

<script>
import ScrollTop from "../components/ScrollTop.vue";
export default {
  components: { ScrollTop },
};
</script>

<style></style>
