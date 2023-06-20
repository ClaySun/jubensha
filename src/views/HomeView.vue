
<template>
  <div class="home-bg">
    <router-link to="/about">
      <div class="home-link"></div>
    </router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .home-bg {
    z-index: 1;
    position: absolute;
    top: env(safe-area-inset-top);
    right: 0;
    bottom: env(safe-area-inset-bottom);
    left: 0;
    width: 100vw;
    height: 100vh;
    /* padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom); */
    background-image: url(../assets/images/home-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .home-link {
    z-index: 2;
    position: absolute;
    top: env(safe-area-inset-top);
    right: 0;
    bottom: env(safe-area-inset-bottom);
    left: 0;
    width: 100vw;
    height: 100vh;
    /* padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom); */
    background-image: url(../assets/images/home-btn.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>