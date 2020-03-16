import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from "@/auth/authService";
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes : [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: {
          rule: 'editor'
      }
    },
    {
      path: '/erasmus',
      name: 'Erasmus+',
      component: () => import('@/views/Erasmus.vue'),
      meta: {
          pageTitle: 'Erasmus+ - Lycée Flaubert',
          rule: 'editor'
      }
     
  },
  {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact.vue'),
      meta: {
          pageTitle: 'Contact - Lycée Flaubert',
          rule: 'editor'
      }
     
  },
  {
      path: '/actualites/:id',
      name: 'Actualités',
      component: () => import('@/views/Actualites.vue'),
      meta: {
          pageTitle: 'Actualités - Lycée Flaubert',
          rule: 'editor'
      }
     
  },
  {
      path: '/mentions-legales',
      name: 'Mentions Légales',
      component: () => import('@/views/Mentions-legales.vue'),
      meta: {
          pageTitle: 'Mentions Légales - Lycée Flaubert',
          rule: 'editor'
      }
     
  },
  {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
      meta: {
          pageTitle: 'Connexion - Lycée Flaubert',
          rule: 'editor'
      }
     
  },
  {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('@/views/admin/Dashboard.vue'),
      meta: {
          rule: 'admin',
          authRequired:true
      }
  },
  {
    path: '/callback',
    name: 'auth-callback',
    component: () => import('@/views/Callback.vue'),
    meta: {
        rule: 'editor'
    }
  },
  ]
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

router.beforeEach((to, from, next) => {
    firebase.auth().onAuthStateChanged(() => {

        // get firebase current user
        const firebaseCurrentUser = firebase.auth().currentUser

        // if (
        //     to.path === "/pages/login" ||
        //     to.path === "/pages/forgot-password" ||
        //     to.path === "/pages/error-404" ||
        //     to.path === "/pages/error-500" ||
        //     to.path === "/pages/register" ||
        //     to.path === "/callback" ||
        //     to.path === "/pages/comingsoon" ||
        //     (auth.isAuthenticated() || firebaseCurrentUser)
        // ) {
        //     return next();
        // }

        // If auth required, check login. If login fails redirect to login page
        if (to.meta.authRequired) {
            if (!(auth.isAuthenticated() || firebaseCurrentUser)) {
                router.push({ path: '/pages/login', query: { to: to.path } })
            }
        }

        return next()
        // Specify the current path as the customState parameter, meaning it
        // will be returned to the application after auth
        // auth.login({ target: to.path });

    });

});

export default router