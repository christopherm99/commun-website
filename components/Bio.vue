<template>
  <div
    v-editable="blok"
    class="flex p-6 mb-10 mx-10 lg:mx-64 border-gray-400 rounded border"
  >
    <img
      :src="blok.image"
      class="hidden lg:block flex-none"
      alt="Profile picture"
    />
    <div class="lg:flex lg:flex-col lg:justify-between lg:pl-4">
      <img
        :src="blok.image"
        class="lg:hidden rounded-full float-right h-16 w-16 ml-5 mb-2"
        alt="Profile icture"
      />
      <p class="font-display text-xl">
        {{ blok.name }}
      </p>
      <p class="font-display">{{ blok.title }}, {{ blok.grad_year }}</p>
      <p class="font-sans text-xs lg:text-sm">
        {{ blok.description }}
      </p>
      <a
        :href="`mailto:${blok.email.email}`"
        class="font-sans text-xs lg:text-sm"
      >
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
