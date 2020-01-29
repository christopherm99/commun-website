<template>
  <div v-editable="blok" class="bg-black text-white text-center py-20 lg:px-20">
    <h1 class="text-6xl font-display">{{ blok.header }}</h1>
    <p class="lg:text-xl font-sans px-20 pt-8 pb-20 text-justify">
      {{ blok.content }}
    </p>
    <v-button v-if="blok.button" :blok="blok.button[0]" />
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
