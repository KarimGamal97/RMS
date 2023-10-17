<template>
  <div class="not-found d-flex flex-column">
    <div class="not-found-img mt-4">
      <img src="../assets/imgs/notfound.png" alt="NotFound" />
    </div>
    <div class="go-back">
      <h2>للأسف !</h2>
      <h4 class="not-found-heading mb-5">هذه الصفحة غير موجودة ..</h4>
      <router-link to="/">
        <button class="btn btn-primary">الصفحة الرئيسية</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
  background-color: #ecf0f1;
  width: 100%;
  height: 100vh;
  text-align: center;
}
.go-back .not-found-heading {
  color: var(--dark-alt);
}
.not-found-img img {
  width: 400px;
  margin: 0 auto;
  mix-blend-mode: multiply;
}
</style>
