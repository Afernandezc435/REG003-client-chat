import axios from 'axios'
import config from './config'
import { io } from 'socket.io-client'

axios.defaults.baseURL = config.BASE_URL
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.validateStatus = status => status>=200 && status <500

export const socket = io()

export default axios
