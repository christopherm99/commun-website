<template>
  <vue-plyr v-editable="blok">
    <div :data-plyr-provider="blok.type" :data-plyr-embed-id="blok.source_id" />
  </vue-plyr>
</template>

<script>
export default {
  props: ['blok']
}
</script>
