<template>
  <div>
    <div class="backgroundHome">
      <homeCarousel></homeCarousel>
    </div>
    <div class="container home">
      <div class="wrapperAgenda">
        <titreHome></titreHome>
        <Agenda></Agenda>
      </div>
      <cardsActu></cardsActu>
      <!-- <div class="backgroundActu"></div> -->
    </div>
  </div>
</template>
<script>
import Agenda from "@/components/Agenda.vue";
import cardsActu from "@/components/cardsActu.vue";
import titreHome from "@/components/titreHome.vue";
import homeCarousel from "@/components/homeCarousel.vue";

export default {
  name: "home",
  components: {
    Agenda,
    cardsActu,
    titreHome,
    homeCarousel
  }
};
</script>
