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
          <p
            ref="errorMessage"
            class="error-message hidden"
          >
            {{ errorMessage }}
          </p>
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
            @input="validateName"
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
            @input="validateEmail"
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
            @input="validatePassword"
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
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      isRegister: false,
      name: '',
      email: '',
      password: '',
      msg:'',
    }
  },
 
  methods: {
    validateName() {
      const MinLength = 4
      const MaxLength = 64
      this.nameValid = this.name.length >= MinLength && this.name.length <= MaxLength
      
    },
    validateEmail() {
       const MinLength = 4
      const MaxLength = 64
      const Regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      this.emailValid = Boolean(this.email.length >= MinLength && this.email.length <= MaxLength && Regex.test(this.email))
    },
    validatePassword() {
      const MinLength = 6
      const MaxLength = 128
      this.passwordValid = this.password.length >= MinLength && this.password.length <= MaxLength
    },
    async signUp() {
      console.log(this.nameValid, this.emailValid, this.passwordValid)
      if(this.nameValid && this.emailValid && this.passwordValid && !this.isRegister) {
      this.isRegister = true 
      console.log(this.nameValid, this.emailValid, this.passwordValid)
        try{
          const credentials = {
            name: this.name,
            email: this.email,
            password:this.password,
          }
          

          const response = await auth.register(credentials)
          console.log('Error: ', response)
          this.$router.push('/')
          console.log(response)
        } catch (error) {
          this.msg = error.message
          console.log('Error: ', error)
        }
      }
      this.isRegister = false
        
    },

  },

})
</script>
<style>

</style>