<template>
  <div
    v-editable="blok"
    class="page w-full"
    :class="`bg-${blok.background || 'white'}`"
  >
    <component
      :is="subblok.component"
      v-for="subblok in blok.body"
      :key="subblok._uid"
      :blok="subblok"
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
