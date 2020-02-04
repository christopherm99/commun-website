<template>
  <iframe
    id="player"
    v-editable="blok"
    type="text/html"
    width="640"
    height="360"
    :src="`https://www.youtube.com/embed/${blok.source_id}?modestbranding=1`"
    frameborder="0"
  />
</template>

<script>
export default {
  props: ['blok']
}
</script>
