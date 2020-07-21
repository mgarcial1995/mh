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
      <div class="mobile__none contact__container__image">
        <img src="@/assets/img/contact.jpg" alt />
      </div>
      <div class="contact__container__info">
        <div class="info__ubications">
          <p
            class="info__ubications__text"
            @click="showOffice = true, showFactory = false"
            :class="{ colorWhite: showOffice }"
          >Oficina</p>
          <p
            class="info__ubications__text"
            @click="showOffice = false, showFactory = true"
            :class="{colorWhite: showFactory}"
          >Planta</p>
        </div>

        <hr style="font-weight: 800;" />

        <div v-if="showOffice" class="info__details">
          Calle Las Esmeraldas 243 - La Rinconada Trujillo - Trujillo
          <br />Telefonos:
          <br />+51 943 699 336 / ‎+51 44 639483
          <br />Correo:
          <br />ventas@mhfabricaciones.com
        </div>
        <div v-if="showFactory" class="info__details">
          Vista Florida - Pataz
          <br />Telefonos:
          <br />+51 943 699 336 / ‎+51 44 639483
          <br />Correo:
          <br />ventas@mhfabricaciones.com
        </div>
      </div>
    </div>
    <div class="contact__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0322864274276!2d-77.59552357410239!3d-7.786401628200215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ae17902516e7a7%3A0x8849e4772e00ea8d!2sPataz%2013501!5e0!3m2!1sen!2spe!4v1594789226077!5m2!1sen!2spe"
        width="100%"
        height="auto"
        class="contact__map--map"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
export default {
  name: "Contact",
  components: {
    Footer
  },
  data() {
    return {
      showOffice: true,
      showFactory: false
    };
  }
};
</script>