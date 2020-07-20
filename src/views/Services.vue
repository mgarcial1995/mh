<template>
  <div class="services">
    <div class="services__header">
      <div class="services__header__text">
        <p class="services__header__text--title">Servicios</p>
        <p
          class="services__header__text--text"
        >El mejor servicio con la mejor calidad a nivel nacional</p>
      </div>
    </div>
    <p class="title">Nuestros productos y servicios</p>
    <div class="section__services">
      <div class="section__services__navServices">
        <p
          @click="showComerce = true, showFabrication = false, showReparation = false"
          :class="{colorWhite: showComerce}"
          class="section__services__navServices--item"
        >COMERCIO</p>
        <p
          @click="showComerce = false, showFabrication = true, showReparation = false"
          :class="{colorWhite: showFabrication}"
          class="section__services__navServices--item"
        >FABRICACIÓN</p>
        <p
          @click="showComerce = false, showFabrication = false, showReparation = true"
          :class="{colorWhite: showReparation}"
          class="section__services__navServices--item"
        >REPARACIÓN</p>
      </div>

      <div v-if="showComerce" class="comerce__service">
        <Service
          v-for="(service, index) in comerce"
          :key="index"
          :name="service.name"
          :image="service.image"
        />
      </div>
      <div v-if="showFabrication" class="fabrication__service">
        <Service
          v-for="(service, index) in reparation"
          :key="index"
          :name="service.name"
          :image="service.image"
        />
      </div>
      <div v-if="showReparation" class="reparation__service">
        <Service
          v-for="(service, index) in fabrication"
          :key="index"
          :name="service.name"
          :image="service.image"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

import Service from "@/components/Service";
import { mapState } from "vuex";
export default {
  name: "Services",
  components: {
    Service,
    Footer
  },
  data() {
    return {
      showComerce: true,
      showFabrication: false,
      showReparation: false
    };
  },
  computed: {
    ...mapState(["comerce", "reparation", "fabrication"])
  }
};
</script>