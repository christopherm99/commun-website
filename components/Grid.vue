<template>
  <div
    v-editable="blok"
    class="flex items-center justify-center pt-5 pb-20"
    :class="(blok.wrap ? 'flex-wrap' : '') + ` px-${blok.margin || 20}`"
  >
    <div
      v-for="subblok in blok.components"
      :key="subblok._uid"
      class="inline-block"
      :class="
        (blok.wrap ? `flex-none py-${blok.v_space || 10}` : 'flex-1') +
          ` px-${blok.h_space || 20}`
      "
    >
      <component :is="subblok.component" :blok="subblok" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
