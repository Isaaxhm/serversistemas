<template>
  <div>
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <label>Usuario:</label>
      <input type="text" v-model="username" />
      <br />
      <label>Contraseña:</label>
      <input type="password" v-model="password" />
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
  const tenantId = '992ff3ae-66ee-40c6-84cf-40162f5fe15f';
  const clientId = 'e572d736-b318-45f9-b530-84387fab812d';
  const redirectUri = 'https://seversistemas.tech';
  const resource = 'https://graph.microsoft.com/';

  const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&resource=${resource}&scope=openid+profile+email`;

  axios.post(authUrl, {
    username: this.username,
    password: this.password,
    grant_type: 'password',
  })
  .then(() => {
    alert('Se ha ingresado correctamente');
  })
  .catch((error) => {
    this.error = error.message;
    alert(this.error);
  });
},
  },
};
</script>