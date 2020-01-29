<template>
  <a
    v-editable="blok"
    :href="blok.link"
    class="font-display font-normal uppercase py-4 px-6 text-white text-xl hover:bg-primary bg-accent"
  >
    {{ blok.label }}
  </a>
</template>

<script>
export default {
  props: ['blok']
}
</script>
