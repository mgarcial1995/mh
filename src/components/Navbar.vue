<template>
  <div class="navigator">
    <router-link class="navigator__logo" to="/">
      <img src="@/assets/img/logo.png" alt />
    </router-link>
    <div class="navigator__items">
      <router-link class="navigator__items--item" to="/">Inicio</router-link>
      <router-link class="navigator__items--item" to="/nosotros">Nosotros</router-link>
      <router-link class="navigator__items--item" to="/servicios">Servicios</router-link>
      <router-link class="navigator__items--item" to="/contacto">Contacto</router-link>
    </div>

    <div id="menu" v-if="showMobileNav" class="navigator__mobile__items">
      <router-link class="navigator__mobile__items--item" to="/">
        <p @click="showMobileNav = false">Inicio</p>
      </router-link>
      <router-link class="navigator__mobile__items--item" to="/nosotros">
        <p @click="showMobileNav = false">Nosotros</p>
      </router-link>
      <router-link class="navigator__mobile__items--item" to="/servicios">
        <p @click="showMobileNav = false">Servicios</p>
      </router-link>
      <router-link class="navigator__mobile__items--item" to="/contacto">
        <p @click="showMobileNav = false">Contacto</p>
      </router-link>
    </div>

    <div class="mobile__menu">
      <i @click="showMobileNav = !showMobileNav" class="fas fa-bars"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMobileNav: false
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.navigator {
  width: 100%;
  transition: 1s;
  height: auto;
  min-height: 90px;
  max-height: 100px;
  background-color: #05071e71;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  &__logo {
    max-width: 300px;
    width: 180px;
    height: auto;
    margin: 0 40px;
    img {
      width: 100%;
      min-width: 180px;
      height: auto;
      min-height: 90px;
      max-height: 100px;
    }
  }
  &__items {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    &--item {
      padding: 0 30px;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;
    }
  }
}
@media only screen and (max-width: 768px) {
  .navigator {
    background-color: #05071e;
    max-height: 100px;
  }
  .navigator__items {
    display: none;
  }
  .mobile__menu {
    display: block;
    margin-right: 50px;
    font-size: 40px;
    color: #fff;
  }
  .navigator__mobile__items {
    position: fixed;
    top: 80px;
    left: 0;
    transition: 1s;
    display: flex;
    background-color: #05071e;
    width: 100%;
    height: calc(100vh - 80px);
    flex-direction: column;
    justify-content: flex-start;
    &--item {
      text-align: center;
      padding: 20px 50px;
      margin: 10px 0;
      color: #fff;
      text-decoration: none;
      font-weight: 700;
      p {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>