<template>
  <div>
    <button @click="login()">Iniciar sesión</button>
  </div>
</template>

<script>
import { PublicClientApplication } from '@azure/msal-browser';

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const clientApp = new PublicClientApplication(clientId, clientSecret);

export default {
  methods: {
    login() {
      const loginRequest = {
        scopes: ["openid", "profile", "email"],
        redirectUri: "http://localhost:8080/",
      };
      clientApp.loginPopup(loginRequest);
    },
  },
};
</script>