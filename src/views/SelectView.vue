
<template>
  <div class="home-bg">
    <img :src="select00" alt="select00"/>
    <img :src="select01" alt="select01"/>
    <img :src="select02" alt="select02"/>
    <img :src="select03" alt="select03"/>
    <img :src="select04" alt="select04"/>
    <img :src="select05" alt="select05"/>
    <!-- <router-link to="/about">
      <div class="home-link"></div>
    </router-link> -->
  </div>
</template>

<script>
import select00 from '../assets/images/select00.png'
import select01 from '../assets/images/select01.png'
import select02 from '../assets/images/select02.png'
import select03 from '../assets/images/select03.png'
import select04 from '../assets/images/select04.png'
import select05 from '../assets/images/select05.png'
export default {
  data () {
    return {
      select00,
      select01,
      select02,
      select03,
      select04,
      select05
    }
  }
}
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
    background-image: url(../assets/images/about-bg.png);
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