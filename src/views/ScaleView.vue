<template>
  <div class="map-bg">
    <!-- <div class="desc-bg"></div> -->
    <div class="map-area">
      <div class="image-area">
        <img :src="map" alt="map" />
      </div>
    </div>
    <div class="desc-btn" @click="handler()">
      <img :src="descBtn2" alt="descBtn2"/>
    </div>
    <audio ref="audio" class="aud">
      <source src="../assets/click.wav" />
    </audio>
  </div>
</template>

<script>
import descBtn2 from '../assets/images/desc-btn2.png'
// import descBtn2 from '../assets/images/desc-btn2.png'
import map from '../assets/images/map.png'
export default {
  data () {
    return {
      map,
      descBtn2
    }
  },
  methods: {
    handler(params) {
      const audioUrl = new URL('../assets/click.wav', import.meta.url)
      this.$refs.audio.src = audioUrl.href;
      this.$refs.audio.play();
      const that = this
      setTimeout(function() {
        if(params) {
          that.$router.push(params)
        } else {
          that.$router.back(-1)
        }
      }, 1000)
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
  background-position: center center;
}
.desc-bg {
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/images/scale-bg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.map-area {
  /* overflow-x: scroll; */
  z-index: 3;
  position: absolute;
  top: 1rem;
  right: 1rem;
  left: .9rem;
  height: 9.8rem;
  /* border-radius: .4rem; */
  /* scrollbar-width: none;
  -ms-overflow-style: none; */
}
.map-area::before {
  /* z-index: 1; */
  content: '';
  position: absolute;
  left: -1.4rem;
  top: -1.4rem;
  right: -1.5rem;
  bottom: -1.2rem;
  background-image: url(../assets/images/scale-bg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.image-area {
  overflow-x: scroll;
  width: 100%;
  height: 9.8rem;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: .4rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.image-area>img {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  margin: 0;
  width: auto;
  height: 9.8rem;
}
.desc-btn {
  z-index: 4;
  position: absolute;
  right: 0;
  bottom: .6rem;
  left: 0;
  text-align: center;
}
@media (max-width: 375px) {
  .map-area {
    z-index: 3;
    position: absolute;
    top: 2rem;
    right: 1rem;
    left: .8rem;
    height: 9.5rem;
  }
  .map-area::before {
    /* z-index: 4; */
    content: '';
    position: absolute;
    left: -0.7rem;
    top: -2.35rem;
    right: -1rem;
    bottom: -2.2rem;
  }
  .image-area {
    height: 9.5rem;
  }
  .image-area>img {
    height: 9.5rem;
  }
  .desc-btn {
    bottom: .6rem;
  }
}
</style>
