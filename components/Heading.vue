<template>
  <h1
    v-editable="blok"
    class="font-display text-6xl px-20 pt-5"
    :class="`text-${blok.color || 'black'}`"
  >
    {{ blok.title }}
  </h1>
</template>

<script>
export default {
  props: ['blok']
}
</script>
