<template>
  <div :class="`map-bg desc-bg${id}`">
    <!-- <div class="desc-bg"></div>
    <div class="desc-bg02"></div> -->
    <div class="desc-btn" @click="handler()">
      <!-- <img :src="descBtn" alt="descBtn"/>
      <img :src="descBtn2" alt="descBtn2"/> -->
    </div>
    <audio ref="audio" class="aud">
      <source src="../../public/click.wav" />
    </audio>
  </div>
</template>

<script>
import descBtn from '../assets/images/desc-btn.png'
import descBtn2 from '../assets/images/desc-btn2.png'
export default {
  data () {
    return {
      descBtn,
      descBtn2,
      id: this.$route.params.id
    }
  },
  mounted () {
    console.log('desc--', this.$route.params.id)
  },
  methods: {
    handler(params) {
      const audioUrl = new URL('../../public/click.wav', import.meta.url)
      this.$refs.audio.src = audioUrl.href;
      this.$refs.audio.play();
      const that = this
      setTimeout(function() {
        if(params) {
          that.$router.push(params)
        } else {
          that.$router.back(-1)
        }
      }, 500)
    },
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
  /* background-image: url(../assets/images/about-bg.png); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.desc-bg0 {
  background-image: url(../assets/images/about-bg0.png);
}
.desc-bg1 {
  background-image: url(../assets/images/about-bg1.png);
}
.desc-bg2 {
  background-image: url(../assets/images/about-bg2.png);
}
.desc-bg3 {
  background-image: url(../assets/images/about-bg3.png);
}
.desc-bg4 {
  background-image: url(../assets/images/about-bg4.png);
}
.desc-bg5 {
  background-image: url(../assets/images/about-bg5.png);
}
.desc-bg6 {
  background-image: url(../assets/images/about-bg6.png);
}
.desc-bg7 {
  background-image: url(../assets/images/about-bg7.png);
}
.desc-bg8 {
  background-image: url(../assets/images/about-bg8.png);
}
.desc-bg,
.desc-bg02 {
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
  top: 0;
  /* opacity: .5;
  background-color: red;
  text-align: center; */
}
@media (max-width: 375px) {
  
}
</style>
