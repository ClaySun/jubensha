
<template>
  <div class="home-bg">
    <router-link to="/about">
      <div class="home-link"></div>
    </router-link>
    
  </div>
</template>

<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<style scoped>
  .home-bg {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: red;
    background-image: url(../assets/images/home-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .home-link {
    position: absolute;
    top: 0;
    left: 80px;
    width: 107px;
    height: 415px;
    background-image: url(../assets/images/home-btn.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>