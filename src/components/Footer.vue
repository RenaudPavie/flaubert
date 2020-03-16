<template>
  <div id="footer">
    <p>© 2020 LYCEE FLAUBERT ROUEN. Tous droits réservés.</p>
    <a href="/mentions-legales">Mentions légales</a>

    <ul class="navbar-nav ml-auto">
      <div class="nav-item">{{this.user}}</div>
      <template v-if="user">
        <!-- <div class="nav-item">{{activeUserInfo.displayName}}</div>
        <div class="nav-item">{{activeUserInfo.status}}</div> -->
        <li class="nav-item">
          <a class="nav-link" @click="logout">Déconnexion</a>
        </li>
      </template>
      <template v-else>
        <li class="nav-item">
          <a href="/login" class="nav-link">Admin</a>
          <!-- <router-link to="login" class="nav-link">Admin</router-link> -->
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
import 'firebase/auth'

export default {
  name: 'app',
  data() {
    return {
      user: null,
      // LoggedIn: false
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
    isLogged() {
      return this.$store.state.getUserInfo;
    },
  },
  methods: {
    logout() {
      // this.LoggedIn = isLoggedIn();
      // if user is logged in via firebase
      const firebaseCurrentUser = firebase.auth().currentUser;

      if (firebaseCurrentUser) {
        firebase.auth().signOut().then(() => {
          this.$router.replace("Home").catch(() => {});
        });
      }

      // Change role on logout. Same value as initialRole of acj.js
      this.$acl.change("admin");
      localStorage.removeItem("userInfo");

      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push("/login").catch(() => {});
    },
  }
};
</script>
<style lang="scss">
#footer {
  background-color: #333;
  padding: 20px;
  // margin-top: 500px;
  color: #fff;
  text-align: center;

  p {
    margin-bottom: 0;
  }

  a {
    color: #d17335;
    &:focus,
    &:hover {
      color: #d17335;
    }
  }
}
</style>
