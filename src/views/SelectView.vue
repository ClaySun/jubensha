
<template>
  <div class="home-bg">
    <div class="select-role">
      <img :src="selectRole" alt="selectRole"/>
    </div>
    <div class="roles-area">
      <div class="bty">
        <img :src="bty" alt="bty"/>
      </div>
      <div class="list-area">
        <div class="list-each">
          <div class="role">
            <img :src="role00" alt="role00"/>
          </div>
          <div>
            <router-link to="/detail/0">
              <img :src="select00" alt="select00"/>
            </router-link>
          </div>
        </div>
        <div class="list-each">
           <div class="role">
            <img :src="role01" alt="role01"/>
          </div>
          <div>
            <router-link to="/detail/1">
              <img :src="select01" alt="select01"/>
            </router-link>
          </div>
        </div>
        <div class="list-each">
           <div class="role">
            <img :src="role02" alt="role02"/>
          </div>
          <div>
            <router-link to="/detail/2">
              <img :src="select02" alt="select02"/>
            </router-link>
          </div>
        </div>
      </div>
      <div class="list-area gap">
        <div class="list-each">
           <div class="role">
            <img :src="role03" alt="role03"/>
          </div>
          <div>
            <router-link to="/detail/3">
              <img :src="select03" alt="select03"/>
            </router-link>
          </div>
        </div>
        <div class="list-each">
           <div class="role">
            <img :src="role04" alt="role04"/>
          </div>
          <div>
            <router-link to="/detail/4">
              <img :src="select04" alt="select04"/>
            </router-link>
          </div>
        </div>
        <div class="list-each">
           <div class="role">
            <img :src="role05" alt="role05"/>
          </div>
          <div>
            <router-link to="/detail/5">
              <img :src="select05" alt="select05"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bty from '../assets/images/bty.png'
import role00 from '../assets/images/role00.png'
import role01 from '../assets/images/role01.png'
import role02 from '../assets/images/role02.png'
import role03 from '../assets/images/role03.png'
import role04 from '../assets/images/role04.png'
import role05 from '../assets/images/role05.png'
import select00 from '../assets/images/select00.png'
import selectRole from '../assets/images/select-role.png'
import select01 from '../assets/images/select01.png'
import select02 from '../assets/images/select02.png'
import select03 from '../assets/images/select03.png'
import select04 from '../assets/images/select04.png'
import select05 from '../assets/images/select05.png'
export default {
  data () {
    return {
      selectRole,
      select00,
      select01,
      select02,
      select03,
      select04,
      select05,
      role00,
      role01,
      role02,
      role03,
      role04,
      role05,
      bty
    }
  }
}
</script>

<style scoped>
  .home-bg {
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    background-image: url(../assets/images/about-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .select-role {
    margin: 1rem auto 0 auto;
    width: 4rem;
    height: 1.6rem;
  }
  .select-role>img {
    display: block;
    width: 100%;
  }
  .roles-area {
    position: relative;
    margin-top: 1rem;
    padding: 0 0.4rem;
  }
  .bty {
    position: absolute;
    top: -1.2rem;
    right: 0;
    width: 1.6rem;
    height: 1.2rem;
  }
  .list-area {
    display: flex;
    justify-content: space-between;
  }
  .list-area>.list-each {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .role {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.4rem;
    height: 5.2rem;
    margin-bottom: 0.2rem;
    background-image: url(../assets/images/role-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .role img {
    display: block;
    margin: 0;
    width: 1.2rem;
  }
  .gap {
    margin-top: 0.4rem;
  }
</style>