import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://your-api-endpoint.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
