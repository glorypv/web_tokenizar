import axios from 'axios'
class PetitionService {

  constructor() { }

  async postData(data: any) {
    const url = process.env.VUE_APP_API_GATEWAY_URL
    const headers = {
      'Authorization': localStorage.pkComercio,
      'Content-Type': 'application/json',
      'Accept': '*'
    }
    try {
      const  response = await axios.post(url,data,{ headers })
      return response.data.token
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        console.error('Error 400: Bad Request');
        console.error(error.response.data.message);
        return error.response.data.message
      } else {
        console.error(error);
      }
    }  
  }


  async getVerify(data: any) {
    const url = process.env.VUE_APP_API_GATEWAY_URL
    const headers = {
      'Authorization': data,
      'Content-Type': 'application/json',
      'Accept': '*'
    }
    try {
      const  response = await axios.get(url,{ headers })
      return response.data
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        console.error('Error 400: Bad Request');
        console.error(error.response.data);
        return error.response.data
      } else {
        console.error(error);
      }
    }

  }



}

export default PetitionService
