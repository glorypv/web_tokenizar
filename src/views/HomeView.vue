<template>
  <div class="home">
    <input type="number" v-model="cardNumber" placeholder="Card Number" /><br />
    <input type="number" v-model="cvv" placeholder="CVV" /><br />
    <input type="string" v-model="expirationYear" placeholder="expiration year"  /><br />
    <input type="string" v-model="expirationMonth" placeholder="expiration month"/><br />
    <input type="email" v-model="email" placeholder="email" /><br />
    <button @click="postData">Generar Token</button>
    <button @click="getVerify">Validar Token</button><br />
    <label for="tokenResponse">Token:</label>
    <input type="text" v-model="responseText"/><br />
    <label for="VerifyResponse">Respuesta:</label>
    <input type="textarea" v-model="responseVerifyText" /><br />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import PetitionService from "../services/PetitionService";


export default defineComponent({
  name: "HomeView",

  
  data() {
    return {
      cardNumber: "",
      cvv: "",
      responseText: "",
      responseVerifyText: "",
      expirationYear: "",
      expirationMonth: "",
      email: "",
    };
  },
  methods: {
    async postData() {
      const petitionService = new PetitionService();
      const data = {
        card_number: this.cardNumber,
        cvv: this.cvv,
        expiration_month: this.expirationMonth,
        expiration_year: this.expirationYear,
        email: this.email,
      };

      console.log( localStorage.pkComercio)
      const response = await petitionService.postData(data);
      this.responseText=response

    },
    async getVerify() {
      const petitionService = new PetitionService();
      const data = this.responseText;
      const response = await petitionService.getVerify(data);
      this.responseVerifyText = JSON.stringify(response);
      this.cvv=''
      this.cardNumber = response.card_number
      this.expirationMonth = response.expiration_month;
      this.expirationYear = response.expiration_year;
      this.email = response.email;
    },
  },
});
</script>
