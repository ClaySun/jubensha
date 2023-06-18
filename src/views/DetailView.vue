<template>
  <div class="about-bg">
    <div class="desc-bg">
      <div class="desc-wrapper">
        <img :src="intro" alt="desc"/>
      </div>
      <div class="btns-area">
        <router-link to="/select">
          <div @click="$router.back(-1)" class="intro-back"></div>
        </router-link>
        <router-link to="/select">
          <div class="intro-map"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import intro from '../assets/images/desc-intro.png'
import map from '../assets/images/detail-map.png'
import back from '../assets/images/detail-back.png'
export default {
  data () {
    return {
      intro,
      map,
      back
    }
  }
}
</script>

<style>
.about-bg {
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/images/about-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.desc-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/detail00.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.btns-area {
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  justify-content: space-around;
}
.intro-back, 
.intro-map {
  width: 4.18rem;
  height: 1.7rem;
  background-image: url(../assets/images/detail-back.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.intro-map {
  background-image: url(../assets/images/detail-map.png);
}
.desc-wrapper {
  margin: 0 auto;
  margin-top: 3rem;
  overflow: scroll;
  width: 5.8rem;
  height: 11rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.desc-wrapper>img {
  display: block;
  margin: 0 auto;
  width: 100%;
}
@media (max-width: 375px) {
  .desc-wrapper {
    margin-top: 2rem;
    overflow: scroll;
    width: 5.8rem;
    height: 9rem;
  }
  .desc-wrapper>img {
    margin: 0 auto;
    width: 80%;
  }
}
</style>
