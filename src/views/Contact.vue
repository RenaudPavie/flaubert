<template>
  <div>
    <div class="backgroundHome">
      <maps id="mapid"></maps>
    </div>
    <!-- <div class="homeTitle">
      <h1>Contact</h1>
    </div> -->
    <div class="container contact">
      <div class="row">
        <formContact class="col-12 col-md-6"></formContact>
        <div class="col-12 col-md-6">
          <div class="contactInfo">
            <div class="blockInfoContact">
              <h2>
                Lycée
                <br />Gustave Flaubert
              </h2>
              <p class="adresse">
                1 rue Albert Dupuis
                <br />76044 Rouen Cedex
              </p>
            </div>
            <div class="diviser"></div>
            <div class="blockInfoContact general">
              <h3>
                Lycée
                <br />Général et Technologique
              </h3>
              <p>
                Tel :
                <span>02 35 12 88 88</span>
              </p>
              <p>
                Fax :
                <span>02 35 12 88 84</span>
              </p>
            </div>
            <div class="diviser"></div>
            <div class="blockInfoContact pro">
              <h3>
                Lycée
                <br />Professionnel
              </h3>
              <p>
                Tel :
                <span>02 35 12 88 46</span>
              </p>
              <p>
                Fax :
                <span>02 35 12 88 30</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formContact from "@/components/formContact.vue";
import maps from "@/components/maps.vue";

export default {
  name: "Contact",
  components: {
    maps,
    formContact
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#mapid {
  width: 90%;
  height: 600px;
  z-index: 1;

  &,
  .leaflet-container {
    border-bottom-right-radius: 150px;
    z-index: 1;
  }
}
</style>
