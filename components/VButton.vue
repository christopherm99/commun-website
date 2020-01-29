<template>
  <a
    v-editable="blok"
    :href="blok.link"
    class="font-display font-normal uppercase py-3 px-5 lg:py-4 lg:px-6 text-white text-base lg:text-xl hover:bg-primary bg-accent hover:text-white"
  >
    {{ blok.label }}
  </a>
</template>

<script>
export default {
  props: ['blok']
}
</script>
