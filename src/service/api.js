import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  }
})



export const postUsuario = async (body) => {
  try {
    const resposta = await api.post('/usuarios', body)
    return resposta.data
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      }
    } else {
      return {
        message: 'erro inesperado',
      }
    }
  }
}

