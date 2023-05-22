import { Ref, ref } from 'vue'
import Petition from '../interfaces/Petition'

class PetitionService {

  constructor () {
  }
  async fetchById (): Promise<void> {
     try {
      const url = process.env.VUE_APP_API_GATEWAY_URL
       const response = await fetch(url)
      const json = await response.json()

     // this.character.value = await json 
  } catch (error) {
      console.log(error)
    } 
  }
}

export default PetitionService
