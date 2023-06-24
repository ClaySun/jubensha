<template>
  <div class="map-bg">
    <div class="desc-bg"></div>
    <div class="back-to-roles" @click="goBack">
      <img :src="mapBack" alt="mapBack"/>
    </div>
    <router-link to="/scale">
      <div class="map-scale">
        <img @click="handler" :src="mapScale" alt="mapScale"/>
      </div>
    </router-link>
    <div class="location-area">
      <div class="list-area">
        <div class="list-each">
          <router-link to="/desc/0">
            <img @click="handler" :src="map00" alt="map00"/>
          </router-link>
        </div>
        <div class="list-each">
          <router-link to="/desc/1">
            <img @click="handler" :src="map01" alt="map01"/>
          </router-link>
        </div>
        <div class="list-each">
          <router-link to="/desc/2">
            <img @click="handler" :src="map02" alt="map02"/>
          </router-link>
        </div>
      </div>
      <div class="list-area">
        <div class="list-each">
          <router-link to="/desc/3">
            <img @click="handler" :src="map03" alt="map03"/>
          </router-link>
        </div>
        <div class="list-each">
          <router-link to="/desc/4">
            <img @click="handler" :src="map04" alt="map04"/>
          </router-link>
        </div>
        <div class="list-each">
          <router-link to="/desc/5">
            <img @click="handler" :src="map05" alt="map05"/>
          </router-link>
        </div>
      </div>
      <div class="list-area">
        <div class="list-each">
          <router-link to="/desc/6">
            <img @click="handler" :src="map06" alt="map06"/>
          </router-link>
        </div>
        <div class="list-each">
          <router-link to="/desc/7">
            <img @click="handler" :src="map07" alt="map07"/>
          </router-link>
        </div>
        <div class="list-each">
          <router-link to="/desc/8">
            <img @click="handler" :src="map08" alt="map08"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapBack from '../assets/images/back-to-roles.png'
import mapScale from '../assets/images/map-scale.png'
import map from '../assets/images/map-bg.png'
import map00 from '../assets/images/map00.png'
import map01 from '../assets/images/map01.png'
import map02 from '../assets/images/map02.png'
import map03 from '../assets/images/map03.png'
import map04 from '../assets/images/map04.png'
import map05 from '../assets/images/map05.png'
import map06 from '../assets/images/map06.png'
import map07 from '../assets/images/map07.png'
import map08 from '../assets/images/map08.png'
export default {
  data () {
    return {
      map,
      map00,
      map01,
      map02,
      map03,
      map04,
      map05,
      map06,
      map07,
      map08,
      mapBack,
      mapScale
    }
  },
  methods: {
    handler() {
      const audioUrl = new URL('../../public/click.wav', import.meta.url)
      this.$refs.audio.src = audioUrl.href;
      this.$refs.audio.play();
    },
    goBack() {
      this.handler();
      this.$router.back(-1);
    }
  }
}
</script>

<style scoped>
.map-bg {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
  background-image: url(../assets/images/map-bg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
}
.back-to-roles {
  z-index: 3;
  position: relative;
  margin-top: 1rem;
  text-align: center;
}
.map-scale {
  z-index: 3;
  position: relative;
  margin-top: 4.4rem;
  text-align: center;
}
.location-area {
  z-index: 2;
  position: relative;
  margin-top: .6rem;
}
.list-area {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  width: 100vw;
}
.list-area>.list-each {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
@media (max-width: 375px) {
  .map-scale {
    margin-top: 4rem;
  }
}
</style>
