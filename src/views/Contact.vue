<template>
  <div class="contact">
    <div class="contact__header">
      <div class="contact__header__text">
        <p class="contact__header__text--title">Contacto</p>
        <p class="contact__header__text--text">Comprometidos con nuestro trabajo y su confianza</p>
      </div>
    </div>
    <p class="title">Visita nuestras instalaciones</p>
    <div class="contact__container">
      <div class="contact__container__image">
        <img src="@/assets/img/contact.jpg" alt />
      </div>
      <div class="contact__container__info">
        <div class="info__ubications">
          <p @click="showOffice = true, showFactory = false">Oficina</p>
          <p @click="showOffice = false, showFactory = true">Taller</p>
        </div>

        <hr />

        <div v-if="showOffice" class="info__details">
          Av. calle jiron - La libertad - Peru
          <br />Telefonos:
          <br />999 999 999
          <br />Correo:
          <br />correo@gmail.com
        </div>
        <div v-if="showFactory" class="info__details">
          Provincia de Pataz
          <br />Telefonos:
          <br />999 999 999
          <br />Correo:
          <br />correo@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      showOffice: true,
      showFactory: false
    };
  }
};
</script>