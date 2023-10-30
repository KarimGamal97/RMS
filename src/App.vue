<template>
  <div class="app">
    <component :is="$route.meta.layouts" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import url(./assets/base.css);
</style>
