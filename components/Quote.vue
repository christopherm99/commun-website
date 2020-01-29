<template>
  <div class="bg-accent text-white font-sans p-10 lg:p-20">
    <div class="pb-10 text-xl lg:text-3xl">
      {{ blok.quote }}
    </div>
    <div>&mdash; {{ blok.author }}</div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
