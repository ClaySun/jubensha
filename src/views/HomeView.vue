
<template>
  <div class="home-bg">
    <router-link to="/about">
      <div @click="handler" class="home-link"></div>
    </router-link>
  </div>
</template>

<script>
import desc from '../assets/images/desc.png'
export default {
  data () {
    return {
      desc
    }
  },
  methods: {
    handler() {
        let audio = new Audio('../../public/click.wav');
        audio.play();
    }
  }
}
</script>

<style scoped>
  .home-bg {
    /* overflow: hidden;
    box-sizing: border-box; */
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom); */
    background-image: url(../assets/images/home-bg2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
  .home-link {
    /* overflow: hidden;
    box-sizing: border-box; */
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom); */
    background-image: url(../assets/images/home-btn2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
</style>