import axios from './http'
 

export default {
    async login(userCredentials:any) {
        const response = await axios.post('/users/signin', userCredentials)
        return response.data
    },
    async register(userCredentials:any) {
        const response = await axios.post('/users/signup', userCredentials)
        return response
        
    },
    async getSecretContent() {
        const response = await axios.get('/users/signup')
        return response
    },

    
}