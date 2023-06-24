
<template>
  <div class="home-bg">
    <div @click="handler" class="home-link"></div>
    <audio ref="audio" class="aud">
      <source src="../../public/click.wav" />
    </audio>
  </div>
</template>

<script>
import desc from '../assets/images/desc.png'
export default {
  data () {
    return {
      mp3url: "",
      desc
    }
  },
  methods: {
    handler() {
      const audioUrl = new URL('../../public/click.wav', import.meta.url)
      console.log('audioUrl--', audioUrl)
      this.$refs.audio.src = audioUrl.href;
      this.$refs.audio.play();
      const that = this
      setTimeout(function() {
        that.$router.push('/about')
      }, 500)
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