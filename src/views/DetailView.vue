<template>
  <div class="about-bg">
    <div :class="`desc-bg desc-bg0${id}`">
      <div class="desc-wrapper">
        <template v-if="id == 0">
          <img :src="intro00" alt="desc"/>
        </template>
        <template v-else-if="id == 1">
          <img :src="intro01" alt="desc"/>
        </template>
        <template v-else-if="id == 2">
          <img :src="intro02" alt="desc"/>
        </template>
        <template v-else-if="id == 3">
          <img :src="intro03" alt="desc"/>
        </template>
        <template v-else-if="id == 4">
          <img :src="intro04" alt="desc"/>
        </template>
        <template v-else-if="id == 5">
          <img :src="intro05" alt="desc"/>
        </template>
      </div>
      <div class="btns-area">
        <div @click="$router.back(-1)" class="intro-back"></div>
        <router-link to="/map">
          <div class="intro-map"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import intro00 from '../assets/images/desc-intro00.png'
import intro01 from '../assets/images/desc-intro01.png'
import intro02 from '../assets/images/desc-intro02.png'
import intro03 from '../assets/images/desc-intro03.png'
import intro04 from '../assets/images/desc-intro04.png'
import intro05 from '../assets/images/desc-intro05.png'
import map from '../assets/images/detail-map.png'
import back from '../assets/images/detail-back.png'
export default {
  data () {
    return {
      intro00,
      intro01,
      intro02,
      intro03,
      intro04,
      intro05,
      map,
      back,
      id: this.$route.params.id
    }
  },
  mounted () {
    console.log('test--', this.$route.params.id)
  }
}
</script>

<style>
.about-bg {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/images/about-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}
.desc-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
}
.desc-bg00 {
  background-image: url(../assets/images/detail00.png);
}
.desc-bg01 {
  background-image: url(../assets/images/detail01.png);
}
.desc-bg02 {
  background-image: url(../assets/images/detail02.png);
}
.desc-bg03 {
  background-image: url(../assets/images/detail03.png);
}
.desc-bg04 {
  background-image: url(../assets/images/detail04.png);
}
.desc-bg05 {
  background-image: url(../assets/images/detail05.png);
}
.btns-area {
  margin-top: .4rem;
  display: flex;
  justify-content: space-around;
}
.btns-area>a {
  display: block;
  flex: 1;
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
  margin-top: 2.6rem;
  overflow: scroll;
  width: 5.2rem;
  height: 7.2rem;
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
    width: 4rem;
    height: 5rem;
  }
  /* .desc-wrapper>img {
    margin: 0 auto;
    width: 80%;
  } */
}
</style>
