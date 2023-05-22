import { Ref, ref } from 'vue'
/* eslint-disable */
class CharacterService {

  constructor () { }

  async postData (data:any):Promise<void> {
  const url = process.env.VUE_APP_API_GATEWAY_URL
  const xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', 'pk_test_1a2b3c4d5e6f7g85')
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.setRequestHeader('Accept', '*/*')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        console.log('Respuesta:', response)
      } else {
        console.error('Error en la solicitud:', xhr.status)
      }
    }
  }
 // const json = xhr.send(JSON.stringify(data)) 
 /* const json = await response.json()
    return json */
    return data
  }


  async getVerify (data:any):Promise<void> {
    const url = process.env.VUE_APP_API_GATEWAY_URL
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization', 'uOmGj4mhqUQnMc8a')
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.setRequestHeader('Accept', '*/*')
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText)
          console.log('Respuesta:', response)
        } else {
          console.error('Error en la solicitud:', xhr.status)
        }
      }
    }
    const json = xhr.send() 
   /* const json = await response.json()
      return json */
      return json
    }
}

export default CharacterService
