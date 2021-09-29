<template>
  <!-- Root element for center items -->
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <!-- Auth Card -->
      <div
        class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
      >
        <!-- Card Title -->
        <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
          Register
        </h2>

        <form
          class="mt-10"
          @submit.prevent="signUp"
        >
          <!-- Name Input -->
          <label
            for="email"
            class="block text-xs font-semibold text-gray-600 uppercase"
          >Name</label>
          <input
            id="name"
            v-model="name"
            type="name"
            name="name"
            placeholder="name"
            autocomplete="name"
            class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required
          >
          <!-- Email Input -->
          <label
            for="email"
            class="block text-xs font-semibold text-gray-600 uppercase"
          >E-mail</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            placeholder="e-mail address"
            autocomplete="email"
            class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required
          >

          <!-- Password Input -->
          <label
            for="password"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="password"
            autocomplete="current-password"
            class="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required
          >
          <!-- Auth Buttton -->
          <button
            type="submit"
            class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
          >
            Create Account
          </button>
          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the 
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a> and 
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
          <div class="text-grey-dark mt-6">
            Already have an account? 
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              <router-link to="/">
                Login
              </router-link>.
            </a>.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import auth from '../Logic/auth'

export default defineComponent({
  components: {},
  data() {
    return {
      name: 'Ana',
      email: 'anayfernandez11@gmail.com',
      password: '12345678',
    }
  },
 
  methods: {
    async signUp() {
        console.log(this.name, this.email, this.password)

        const response = await auth.register({
            name: this.name,
            email: this.email,
            password: this.password,
        })
        this.$router.push('/')
        console.log(response)
        /*
         axios.defaults.baseURL = config.BASE_URL
        axios.defaults.headers.get['Accept'] = 'application/json'
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.post('/users/signup', {
            name: this.name,
            email: this.email,
            password: this.password
        }).then( response => {
            console.log(response)
        }).catch( error => {
            console.log(error)
        })
        */
    },
  },

})
</script>