<template>
  <div v-editable="blok" class="flex justify-center p-20 font-display">
    <div>
      <h1 class="text-6xl font-bold">{{ blok.title }}</h1>
      <span class="text-5xl font-thin">{{ time }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['blok'],
  computed: {
    time() {
      return moment(this.blok.date).fromNow(false)
    }
  }
}
</script>
