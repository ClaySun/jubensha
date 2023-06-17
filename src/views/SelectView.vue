
<template>
  <div class="home-bg">
    <div class="list-area">
      <div class="list-each">
        <img :src="select00" alt="select00"/>
      </div>
      <div class="list-each">
        <img :src="select01" alt="select01"/>
      </div>
      <div class="list-each">
        <img :src="select02" alt="select02"/>
      </div>
    </div>
    <div class="list-area">
      <div class="list-each">
        <img :src="select03" alt="select03"/>
      </div>
      <div class="list-each">
        <img :src="select04" alt="select04"/>
      </div>
      <div class="list-each">
        <img :src="select05" alt="select05"/>
      </div>
    </div>
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
  .list-area {
    display: flex;
    justify-content: space-between;
    margin: 0 0.75rem;
  }
  .list-area>.list-each {
    flex: 1;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .list-area img {
    display: block;
    margin: 0;
    width: 100%;
  }
</style>