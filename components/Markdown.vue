<template>
  <div
    v-editable="blok"
    class="px-10 lg:px-64 pt-2 lg:pt-10 pb-20 text-base lg:text-lg text-justify font-light font-serif"
  >
    <vue-markdown :source="blok.text" />
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  props: ['blok']
}
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

a:hover {
  @apply text-accent;
}
</style>
