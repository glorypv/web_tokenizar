<template>
  <div>
    <label for="username">Usuario:</label>
    <input type="text" id="username" v-model="username" />
  </div>
  <div>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" v-model="password" />
  </div>
  <div>
    <button @click="validateLogin">Iniciar sesión</button>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent, onMounted } from "vue";
  export default defineComponent({
      name: "LoginView",
      data() {
          return {
              username: "",
              password: ""
          };
      },
      methods: {
          async validateLogin() {
              if (this.username === 'admin' && this.password === '1234') {
                  localStorage.pkComercio = "pk_test_1a2b3c4d5e6f7g85";
                  this.$router.push({ path: '/home' })
              }
          }
      },
    });
  </script>
  