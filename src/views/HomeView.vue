<template>
  <div class="home">
    <input type="number" v-model="cardNumber" placeholder="Card Number"><br>
    <input type="number" v-model="cvv" placeholder="CVV"><br>
    <input type="string" v-model="expirationYear" placeholder="expiration year"><br>
    <input type="string" v-model="expirationMonth" placeholder="expiration month"><br>
    <input type="email" v-model="email" placeholder="email"><br>
    <button @click="postData">Validad Token</button><br><br>
    <input type="text" v-model="responseText" ><br>
    <button @click="getVerify">Validar Token</button><br>
    <input type="textarea " v-model="responseVerifyText" ><br>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import CharacterService from '../services/CharacterService'

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      cardNumber: '',
      cvv: '',
      responseText: '',
      responseVerifyText: '',
      expirationYear: '',
      expirationMonth: '',
      email: ''
    }
  },
  methods: {
    async postData () {
      const characterService = new CharacterService()
      const data = { card_number: this.cardNumber, cvv: this.cvv, expiration_month: this.expirationMonth, expiration_year: this.expirationYear, email: this.email }
      const response = await characterService.postData(data)
      this.responseText = JSON.stringify(response)
    },
    async getVerify () {
      const characterService = new CharacterService()
      const data = this.responseText
      const response = await characterService.getVerify(data)
      this.responseVerifyText = JSON.stringify(response)
    }
  }
})
</script>
