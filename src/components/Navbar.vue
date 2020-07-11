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
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.navigator {
  width: 100%;
  height: auto;
  min-height: 90px;
  max-height: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
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
</style>