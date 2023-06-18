<template>
  <div class="about-bg">
    <div class="desc-bg"></div>
    <div class="list-area">
      <div class="list-each">
        <router-link to="/detail">
          <img :src="map00" alt="select00"/>
        </router-link>
      </div>
      <div class="list-each">
        <router-link to="/detail">
          <img :src="map01" alt="select01"/>
        </router-link>
      </div>
      <div class="list-each">
        <router-link to="/detail">
          <img :src="map02" alt="select02"/>
        </router-link>
      </div>
    </div>
    <div class="list-area">
      <div class="list-each">
        <router-link to="/detail">
          <img :src="map03" alt="select03"/>
        </router-link>
      </div>
      <div class="list-each">
        <router-link to="/detail">
          <img :src="map04" alt="select04"/>
        </router-link>
      </div>
      <div class="list-each">
        <router-link to="/detail">
          <img :src="map05" alt="select05"/>
        </router-link>
      </div>
    </div>
    <div class="list-area">
      <div class="list-each">
        <router-link to="/detail">
          <img :src="map06" alt="select03"/>
        </router-link>
      </div>
      <div class="list-each">
        <router-link to="/detail">
          <img :src="map07" alt="select04"/>
        </router-link>
      </div>
      <div class="list-each">
        <router-link to="/detail">
          <img :src="map08" alt="select05"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
      map08
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
  background-image: url(../assets/images/map-bg.png);
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

@media (max-width: 375px) {
  
}
</style>
