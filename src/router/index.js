import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
      clientId: "e572d736-b318-45f9-b530-84387fab812d",
      authority: `https://login.microsoftonline.com/992ff3ae-66ee-40c6-84cf-40162f5fe15f`,
      redirectUri: "http://seversistemas.tech/",
  },
  cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true,
  }
};

const msalInstance = new PublicClientApplication(msalConfig);



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router, msalInstance };
