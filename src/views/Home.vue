<template>
  <Login msg="Vue 3, Vite, TypeScript & Tailwind CSS" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Login from '../components/Login.vue'

export default defineComponent({
  components: {
    Login,
  },
})
</script>
