<template>
  <div
    v-editable="blok"
    class="page w-full"
    :class="`bg-${blok.background || 'white'}`"
  >
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.page {
  min-height: calc(100vh - 5.5rem - 8rem);
}
</style>
