<template>
  <div
    v-editable="blok"
    class="teaser flex justify-end items-center bg-fixed bg-cover bg-center text-right"
    :style="{ 'background-image': `url(${blok.background})` }"
  >
    <div class="text-white font-display pr-8 lg:pr-20">
      <h1 class="text-6xl font-medium">
        {{ blok.headline }}
      </h1>
      <h2 class="text-3xl pb-2 font-light">
        {{ blok.subtitle }}
      </h2>
      <h3 class="text-2xl font-thin">
        {{ date }}
      </h3>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['blok'],
  computed: {
    date() {
      return moment(this.blok.date).format('dddd MMMM DD, YYYY')
    }
  }
}
</script>

<style lang="scss">
.teaser {
  min-height: calc(100vh - 5.5rem);
}
</style>
