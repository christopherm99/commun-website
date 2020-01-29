<template>
  <div
    v-editable="blok"
    class="page"
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
