<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->
<template>
  <div id="wrapperActu">
    <div class="mainTitleActu">
      <h2>Actualités</h2>
    </div>

    <div class="carouselActu">
      <swiper :options="swiperOption">
        <swiper-slide :key="index" v-for="(actu,index) in cardActu">
          <div class="cardActu">
            <div
              class="actuImg"
              v-bind:style="`background: url('${actu.img}') no-repeat;background-size:cover;`"
            >
              <p class="actuTag">{{actu.tag}}</p>
            </div>
            <div class="cardContent">
              <h3>{{actu.title}}</h3>
              <p class="cardDesc">{{actu.description}}</p>
              <BtnLireSuite msg="Lire la suite" />
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BtnLireSuite from "@/components/BtnLireSuite.vue";

export default {
  name:"cardActu",
  data() {
    return {
      cardActu: [
        {
          title: "Journée Prévention Routière",
          description:
            "Formation aux gestes de premiers secours avec les étudiants de Bts SIO1 et SIO2. Merci à Mathias Joutet, professeur d'EPS pour sa précieuse formation ainsi qu'à Sophie Losardo, professeur en Bts ESF, organisatrice de cette journée.",
          img: require("@/assets/images/actuImg/actu3.png"),
          tag: "#animation"
        },
        {
          title: "Journée Prévention Routière",
          description:
            "Formation aux gestes de premiers secours avec les étudiants de Bts SIO1 et SIO2. Merci à Mathias Joutet, professeur d'EPS pour sa précieuse formation ainsi qu'à Sophie Losardo, professeur en Bts ESF, organisatrice de cette journée.",
          img: require("@/assets/images/actuImg/actu2.png"),
          tag: "#animation"
        },
        {
          title: "Journée Prévention Routière",
          description:
            "Formation aux gestes de premiers secours avec les étudiants de Bts SIO1 et SIO2. Merci à Mathias Joutet, professeur d'EPS pour sa précieuse formation ainsi qu'à Sophie Losardo, professeur en Bts ESF, organisatrice de cette journée.",
          img: require("@/assets/images/actuImg/actu1.png"),
          tag: "#animation"
        },
        {
          title: "Journée Prévention Routière",
          description:
            "Formation aux gestes de premiers secours avec les étudiants de Bts SIO1 et SIO2. Merci à Mathias Joutet, professeur d'EPS pour sa précieuse formation ainsi qu'à Sophie Losardo, professeur en Bts ESF, organisatrice de cette journée.",
          img: require("@/assets/images/actuImg/01.jpg"),
          tag: "#animation"
        },
        {
          title: "Journée Prévention Routière",
          description:
            "Formation aux gestes de premiers secours avec les étudiants de Bts SIO1 et SIO2. Merci à Mathias Joutet, professeur d'EPS pour sa précieuse formation ainsi qu'à Sophie Losardo, professeur en Bts ESF, organisatrice de cette journée.",
          img: require("@/assets/images/actuImg/02.jpg"),
          tag: "#animation"
        },
        {
          title: "Journée Prévention Routière",
          description:
            "Formation aux gestes de premiers secours avec les étudiants de Bts SIO1 et SIO2. Merci à Mathias Joutet, professeur d'EPS pour sa précieuse formation ainsi qu'à Sophie Losardo, professeur en Bts ESF, organisatrice de cette journée.",
          img: require("@/assets/images/actuImg/03.jpg"),
          tag: "#animation"
        },
        {
          title: "Journée Prévention Routière",
          description:
            "Formation aux gestes de premiers secours avec les étudiants de Bts SIO1 et SIO2. Merci à Mathias Joutet, professeur d'EPS pour sa précieuse formation ainsi qu'à Sophie Losardo, professeur en Bts ESF, organisatrice de cette journée.",
          img: require("@/assets/images/actuImg/04.jpg"),
          tag: "#animation"
        },
        {
          title: "Journée Prévention Routière",
          description:
            "Formation aux gestes de premiers secours avec les étudiants de Bts SIO1 et SIO2. Merci à Mathias Joutet, professeur d'EPS pour sa précieuse formation ainsi qu'à Sophie Losardo, professeur en Bts ESF, organisatrice de cette journée.",
          img: require("@/assets/images/actuImg/05.jpg"),
          tag: "#animation"
        },
        {
          title: "Journée Prévention Routière",
          description:
            "Formation aux gestes de premiers secours avec les étudiants de Bts SIO1 et SIO2. Merci à Mathias Joutet, professeur d'EPS pour sa précieuse formation ainsi qu'à Sophie Losardo, professeur en Bts ESF, organisatrice de cette journée.",
          img: require("@/assets/images/actuImg/06.jpg"),
          tag: "#animation"
        },
        
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          992: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    BtnLireSuite
  }
  // created() {
  //   // Card 1
  //   this.$http.get("/api/users/pixinvent/product/1")
  //     .then((response) => { this.cardActu = response.data })
  //     .catch((error)   => { console.log(error) })
  // }
};
</script>

