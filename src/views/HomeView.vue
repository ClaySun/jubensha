
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
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    background-image: url(../assets/images/home-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .home-link {
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    background-image: url(../assets/images/home-btn.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>