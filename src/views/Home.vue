<template>
  <div class="container home">
    <div class="home__box">
      <p>Productos y servicios metalmecánicos de alta calidad</p>
      <router-link to="/nosotros" class="button--image btn__home">Nosotros</router-link>
    </div>
    <div class="box__container about">
      <div class="about__text">
        <p>
          Con más de 10 años de experiencia, cada proyecto para nosotros es un
          nuevo desafio y un paso más al progreso.
        </p>
      </div>
      <div class="about__button">
        <router-link to="/nosotros" class="button--blue">Nuestros Valores</router-link>
      </div>
    </div>
    <div class="box__container services">
      <div class="services__listServices">
        <p class="services__listServices--subtitle">Nuestros servicios</p>
        <div class="services__listServices--services">
          <p>Comercialización</p>
          <p>Fabricación</p>
          <p>Reparación</p>
        </div>
        <router-link to="/servicios" class="button--white">Servicios</router-link>
      </div>
      <div class="services__images">
        <img src="@/assets/img/reparacion.jpg" alt />
      </div>
    </div>
    <div class="contact">
      <div class="contact__image">
        <img src="@/assets/img/pataz.jpg" alt />
      </div>
      <div class="contact__info">
        <p class="contact__info--subtitle">Nos encontramos en la provincia de Pataz.</p>

        <p class="contact__info--text">Listos y preparados para brindar un servicio de calidad.</p>

        <router-link to="/contacto" class="button--white">Contacto</router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: {
    Footer
  }
};
</script>
