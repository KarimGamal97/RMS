<template>
  <div class="app">
    <component :is="$route.meta.layouts" />
  </div>
</template>

<script>
import ScrollTop from "./components/ScrollTop.vue";
export default {
  data() {
    return {
      components: { ScrollTop },
    };
  },
};
</script>

<style lang="scss">
@import url(./assets/base.css);
</style>
