<template>
  <div>
    <button class="scroll-to-top-button" @click="scrollToTop" v-if="showButton">
      <font-awesome-icon icon="arrow-up" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showButton = window.scrollY > 50;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.scroll-to-top-button {
  position: fixed;
  bottom: 60px;
  right: 20px;
  background-color: red;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.scroll-to-top-button:hover {
  background-color: #0056b3;
}
</style>
