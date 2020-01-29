<template>
  <h1
    v-editable="blok"
    class="font-display px-10 lg:px-20 pb-5"
    :class="
      (blok.level == 2 ? 'text-2xl lg:text-4xl' : 'text-4xl lg:text-6xl') +
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
