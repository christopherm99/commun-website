<template>
  <img v-editable="blok" :src="blok.source" alt="Gallery photo" />
</template>

<script>
export default {
  props: ['blok']
}
</script>
