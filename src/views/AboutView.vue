<template>
  <div class="about-bg">
    <div class="desc-bg">
      <div class="desc-wrapper">
        <img class="" :src="desc" alt="desc"/>
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
::-webkit-scrollbar{display:none}
.about-bg {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: red;
  background-image: url(../assets/images/about-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.desc-bg {
  position: relative;
  /* box-sizing: border-box; */
  width: 90vw;
  height: 96vh;
  /* padding: 14vh 10vw 14vh 10vw; */
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
  width: 100%;
}
.desc-title {
  /* margin-bottom: 2vh;
  text-align: center;
  font-size: 18px; */
}
.desc {
  text-indent: 2em;
}
</style>
