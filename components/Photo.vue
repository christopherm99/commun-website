<template>
  <img v-editable="blok" :src="blok.source" />
</template>

<script>
export default {
  props: ['blok']
}
</script>
