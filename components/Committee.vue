<template>
  <div v-editable="blok">
    <hero :blok="blok.hero[0]" />
    <div class="px-64 py-16 text-lg text-justify font-light font-serif">
      <p class="mb-10">
        {{ blok.description }}
      </p>
      <v-button v-if="blok.guide[0]" :blok="blok.guide[0]" />
      <p v-else>
        Check back at a later date for the background guide.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
