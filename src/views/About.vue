<template>
  <div class="about">
    <div class="about__header">
      <div class="about__header__text">
        <p class="about__header__text--title">Nosotros</p>
        <p class="about__header__text--text">Nuestros años de experiencia nos respaldan</p>
      </div>
    </div>
    <div class="about__history">
      <p class="about__history--subtitle">Nuestra historia</p>
      <div class="about__history--text">
        METALICAS M.H. fue creada en Pataz en el año 2008 debido a las
        necesidades presentadas por las pequeñas y medianas empresas mineras.
      </div>
    </div>
    <div class="about__history__about">
      <div class="about__history__about--text">
        <p>
          Apostamos por adquirir máquinas de producción, soldadura y afines para
          así satisfacer necesidades de dichas empresas.
        </p>
      </div>
      <div class="mobile__none about__history__about--image">
        <img src="@/assets/img/taller.jpg" alt />
      </div>
    </div>
    <div class="about__description">
      <div class="about__description--text">
        <p>
          En la actualidad producimos una amplia gama de accesorios de
          herramientas, maquinarias y equipos para la industria minera.
        </p>
      </div>
      <div class="about__description--banner">
        <img src="@/assets/img/banner.jpg" alt />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
export default {
  name: "About",
  components: {
    Footer
  }
};
</script>
