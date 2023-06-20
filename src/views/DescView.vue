<template>
  <div class="map-bg">
    <div class="desc-bg"></div>
    <div class="desc-bg02"></div>
    <div class="desc-btn" @click="$router.back(-1)">
      <img :src="descBtn" alt="descBtn"/>
      <img :src="descBtn2" alt="descBtn2"/>
    </div>
  </div>
</template>

<script>
import descBtn from '../assets/images/desc-btn.png'
import descBtn2 from '../assets/images/desc-btn2.png'
export default {
  data () {
    return {
      descBtn,
      descBtn2
    }
  }
}
</script>

<style scoped>
.map-bg {
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(../assets/images/about-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.desc-bg,
.desc-bg02 {
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/desc-bg01.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.desc-bg02 {
  z-index: 1;
  background-image: url(../assets/images/desc-bg02.png);
}
.desc-btn {
  z-index: 2;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}
@media (max-width: 375px) {
  
}
</style>
