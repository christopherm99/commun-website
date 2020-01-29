<template>
  <div
    v-editable="blok"
    class="teaser flex justify-end items-center bg-fixed bg-cover bg-right text-right"
    :style="{ 'background-image': `url(${blok.background})` }"
  >
    <div class="font-display pr-6 lg:pr-12" :class="`text-${blok.text_color}`">
      <h1 class="text-4xl lg:text-6xl font-medium">
        {{ blok.title }}
      </h1>
      <h2 class="text-2xl lg:text-3xl pb-2 font-light">
        {{ blok.subtitle }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
