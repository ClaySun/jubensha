<template>
  <div class="about-bg">
    <div class="desc-bg">
      <div class="desc-wrapper">
        <img :src="desc" alt="desc"/>
        <div class="select-btn"></div>
        <div class="tag"></div>
      </div>
    </div>
  </div>
</template>

<script>
import desc from '../assets/images/desc.png'
export default {
  data () {
    return {
      desc
    }
  }
}
</script>

<style>
.about-bg {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
  background-image: url(../assets/images/about-desc-bg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.select-btn {
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -110px;
  width: 4.18rem;
  height: 1.7rem;
  background-image: url(../assets/images/select-btn.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.tag {
  z-index: 1;
  position: absolute;
  bottom: -1.2rem;
  right: 50%;
  margin-right: -2.4rem;
  width: 1rem;
  height: 2rem;
  background-image: url(../assets/images/tag.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.desc-wrapper {
  margin: 0 auto;
  margin-top: 2.8rem;
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
