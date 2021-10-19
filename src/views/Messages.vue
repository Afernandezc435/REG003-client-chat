<template>
  <div class="h-screen flex">
    <div class="flex flex-1 flex-col bg-gray-300">
      <div class="flex-1 px-4 pt-4 mb-2 overflow-hidden" />
      <div class="h-16 bg-gray-200">
        <form
          class="flex h-full"
          @submit.prevent="sendMessage"
        >
          <input
            v-model="message"
            class="flex-1 h-full px-5 shadow appearance-none border rounded py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter message"
          >

          <button
            class="h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :disabled="!message"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import messageAction, { actions } from '../actions/message-actions'
import  { socket } from '../Logic/http'

export default defineComponent({
  components: {},
  data() {
    return {
      message:'',
    }
  },
  mounted() {
    socket.on('message-receive', async data => {
      console.log('Aqui1.2')
      if (data) {
        console.log(data)
      }
    })

  },
  methods: {
    sendMessage() {
      try {
        actions.emitSocketMessage({
          text: this.message,
          token: this.$store.getters.getToken,
        })()
      } catch (err) {
        console.log(err.message)
      }
    },
  },
})

</script>
