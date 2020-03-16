import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from "firebase";
import store from './store/store.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueStripeMenu from 'vue-stripe-menu'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.use(VueStripeMenu)

// Import build styles
import 'vue-stripe-menu/dist/vue-stripe-menu.css'

// Import Leaflet
import 'leaflet/dist/leaflet.css'

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/scss/style.scss'

// Tailwind
import '@/assets/css/main.css'
// Globally Registered Components
// import './globalComponents.js'

// // PrismJS
// import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'

// ACL
import acl from './acl/acl'

// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// Auth0 Plugin
import AuthPlugin from "./plugins/auth";
Vue.use(AuthPlugin);

// Feather font icon
require('./assets/css/iconfont.css');

Vue.config.productionTip = false;

const configOptions = {
  apiKey: 'AIzaSyBjBrdnoQ9iD_QZa8aWA4mxN0AYLh0azcE',
  authDomain: 'lycee-flaubert.firebaseapp.com',
  databaseURL: 'https://lycee-flaubert.firebaseio.com',
  projectId: 'lycee-flaubert',
  storageBucket: 'lycee-flaubert.appspot.com',
  messagingSenderId: '241004223430',
  appId: '1:241004223430:web:2a11ceedfddd0cf321f0c7',
  measurementId: 'G-XNJZ9QTN9S'
};

firebase.initializeApp(configOptions);

// firebase.auth().onAuthStateChanged(user => {
//   store.dispatch("fetchUser", user);
// });

new Vue({
  router,
  store,
  acl,
  render: h => h(App)
}).$mount('#app')
