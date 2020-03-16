<template>
  <div id="app">
    <div class="mask"></div>
    <div class="container">
      <Header />
    </div>
    <router-view class="page"/>
    <Footer />
  </div>
</template>
<script>
import jwt from "@/http/requests/auth/jwt/index.js";
import Header from "@/components/HoverHeader.vue";
import Footer from "@/components/Footer.vue";


export default {
  components: {
    Header,
    Footer
  },
  async created() {
    // jwt
    jwt.init();

    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("scroll", this.handleScroll);

    // Auth0
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.error(e);
    }
  },
}
</script>
<style lang="scss">
#app {
  min-height:100vh;
	display:flex;
	flex-direction:column;
  width: 100%;
  height: 100%;
  position: relative;

  .page {
    flex-grow: 1
  }
}
</style>
