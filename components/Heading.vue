<template>
  <h1
    v-editable="blok"
    class="font-display px-20 pt-5"
    :class="
      (blok.level == 2 ? 'text-4xl' : 'text-6xl') +
        ` text-${blok.color || 'black'}`
    "
  >
    {{ blok.title }}
  </h1>
</template>

<script>
export default {
  props: ['blok']
}
</script>
