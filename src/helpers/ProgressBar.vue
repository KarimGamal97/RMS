<template>
    <div class="progress-bar" v-if="showProgressBar">
      <div class="progress"></div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'ProgressBar',
    setup() {
      const router = useRouter();
      const showProgressBar = ref(false);
  
      const updateProgressBar = () => {
        showProgressBar.value = true;
      };
  
      const hideProgressBar = () => {
        showProgressBar.value = false;
      };
  
      onMounted(() => {
        updateProgressBar();
      });
  
      router.beforeEach((to) => {
        showProgressBar.value = to.meta.showProgressBar === true;
      });
  
      router.afterEach((to) => {
        if (to.meta.showProgressBar === true) {
          setTimeout(hideProgressBar, 3000);
        }
      });
  
      return {
        showProgressBar,
      };
    },
  });
  </script>
  
  <style>
  /* Your styles for the progress bar here */
  
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px !important;
    background-color: #007bff;
    z-index: 9999;
  }
  
  .progress {
    height: 100%;
    background-color: #007bff !important;
    transition: width 1s ease;
  }
  
  @keyframes progressBarAnimation {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
  
  .progress-bar {
    animation: progressBarAnimation 2.5s ease-in-out;
  }
  </style>
  