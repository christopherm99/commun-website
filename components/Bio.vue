<template>
  <div
    v-editable="blok"
    class="flex p-6 my-10 mx-64 border-gray-400 rounded border"
  >
    <img :src="blok.image" class="flex-none" />
    <div class="flex flex-col justify-between pl-4">
      <div class="font-display text-xl">
        {{ blok.name }}
      </div>
      <div class="font-display">{{ blok.title }}, {{ blok.grad_year }}</div>
      <div class="font-sans text-sm">
        {{ blok.description }}
      </div>
      <a :href="`mailto:${blok.email.email}`" class="font-sans text-sm">
        {{ blok.email.email }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
