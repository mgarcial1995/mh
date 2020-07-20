import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comerce: [
      {
        name: "Mangueras hidráulicas y accesorios",
        image: require("../assets/img/services/mangueras-hidraulicas.jpg"),
      },
      {
        name: "Repuestos para perforadora",
        image: require("../assets/img/services/respuestos-perforadora.jpg"),
      },
      {
        name: "Niples escamados de todas las medidas",
        image: require("../assets/img/services/niples-escamados.jpg"),
      },
      {
        name: "Brocas de perforación o pepa de rueda",
        image: require("../assets/img/services/brocas-de-perforacion.jpg"),
      },
      {
        name: "Barrenos",
        image: require("../assets/img/services/barrenos.jpg"),
      },
      {
        name: "Ventiladores para minería artesanal",
        image: require("../assets/img/services/ventiladores.jpg"),
      },
      {
        name: "Winches ",
        image: require("../assets/img/services/winches.jpg"),
      },
      {
        name: "Mangueras para aire",
        image: require("../assets/img/services/mangueras-para-aire.jpg"),
      },
      {
        name: "Acoples para manguera de aire ",
        image: require("../assets/img/services/acople-para-manguera-aire.jpg"),
      },
      {
        name: "Carros mineros ",
        image: require("../assets/img/services/carro-minero.jpg"),
      },
      {
        name: "Carretillas ",
        image: require("../assets/img/services/carretilla.jpg"),
      },
      {
        name: "Pulmones para aire, minería artesanal",
        image: require("../assets/img/services/pulmon-de-aire.jpg"),
      },
      {
        name: "Abrasivos",
        image: require("../assets/img/services/abrasivos.jpg"),
      },
      {
        name: "Pernos y medidas",
        image: require("../assets/img/services/pernos.jpg"),
      },
      {
        name: "Poleas acanaladas de aluminio",
        image: require("../assets/img/services/poleas-acanaladas.jpg"),
      },
    ],
    reparation: [
      {
        name: "Carros mineros",
        image: require("../assets/img/services/carro-minero.jpg"),
      },
      {
        name: "Winches",
        image: require("../assets/img/services/winches.jpg"),
      },
      {
        name: "Ventiladores",
        image: require("../assets/img/services/ventiladores.jpg"),
      },
      {
        name: "Cucharones de scoop ",
        image: require("../assets/img/services/cucharones-de-scoop.jpg"),
      },
      {
        name: "Reparación de ruedas de carro minero",
        image: require("../assets/img/services/ruedas-de-carro-minero.jpg"),
      },
      {
        name: "Reparación de ruedas de locomotora",
        image: require("../assets/img/services/ruedas-de-locomotora.jpg"),
      },
    ],
    fabrication: [
      {
        name: "Carros mineros",
        image: require("../assets/img/services/carro-minero.jpg"),
      },
      {
        name: "Techos metálicos",
        image: require("../assets/img/services/techo-metalico.jpg"),
      },
      {
        name: "Cercos perimétricos",
        image: require("../assets/img/services/cercos-perimetricos.jpg"),
      },
      {
        name: "Poleas acanaladas",
        image: require("../assets/img/services/poleas-acanaladas.jpg"),
      },
      {
        name: "Pernos y tuercas",
        image: require("../assets/img/services/pernos.jpg"),
      },
      {
        name: "Tanques metálicos",
        image: require("../assets/img/services/tanque-metalico.jpg"),
      },
      {
        name: "Cambios para línea riel ",
        image: require("../assets/img/services/cambios-via-rial.jpg"),
      },
      {
        name: "Ventiladores axiales",
        image: require("../assets/img/services/ventiladores.jpg"),
      },
      {
        name: "Ventiladores tipo caracol",
        image: require("../assets/img/services/ventiladores-caracol.jpg"),
      },
      {
        name: "Carretillas",
        image: require("../assets/img/services/carretilla.jpg"),
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
