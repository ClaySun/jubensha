
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
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/images/home-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .home-link {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/home-btn.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>