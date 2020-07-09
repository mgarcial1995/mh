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
  height: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  &__logo {
    width: 180px;
    height: auto;
    margin: 0 40px;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__items {
    &--item {
      padding: 0 30px;
      margin: 0 20px;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>