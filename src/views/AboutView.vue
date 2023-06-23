<template>
  <div class="about-bg">
    <div class="desc-bg">
      <div class="desc-wrapper">
        <img :src="desc" alt="desc"/>
        <router-link to="/select">
          <div class="select-btn"></div>
        </router-link>
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

<style scoped>
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
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/images/about-desc-bg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
}
.select-btn {
  z-index: 3;
  position: absolute;
  bottom: 2.4rem;
  left: 50%;
  margin-left: -2.09rem;
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
  bottom: 0.8rem;
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
  height: 7rem;
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
  .select-btn {
    bottom: 2.4rem;
    margin-left: -1.05rem;
    width: 2.09rem;
    height: 0.85rem;
  }
  .tag {
    bottom: 1.8rem;
    right: 50%;
    margin-right: -1.3rem;
    width: .5rem;
    height: 1rem;
  }
}
@media (max-width: 412px) and  (min-width: 376px) {
  .desc-wrapper {
    margin-top: 3rem;
    height: 9rem;
  }
}
</style>
