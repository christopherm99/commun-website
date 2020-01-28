<template>
  <div v-editable="blok" class="flex items-center p-20">
    <div
      v-for="blok in blok.components"
      :key="blok._uid"
      class="inline-block px-20 flex-1"
    >
      <component :is="blok.component" :blok="blok" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
