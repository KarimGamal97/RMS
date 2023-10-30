<template>
  <button class="scroll-to-top-button" @click="scrollToTop" v-show="showButton">
    Scroll to Top
  </button>
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
      this.showButton = window.scrollY > 20; // Adjust the value as needed
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
  bottom: 20px;
  left: 20px;
  background-color: red;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: none;
}

.scroll-to-top-button:hover {
  background-color: #0056b3;
}
</style>
