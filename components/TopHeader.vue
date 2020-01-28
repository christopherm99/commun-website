<template>
  <header>
    <nav class="flex items-center justify-between">
      <div>
        <a href="/" class="flex ml-6 p-6 items-center">
          <img
            src="//a.storyblok.com/f/74011/1944x1583/b4cfb4a8c3/commun_icon_red.png"
            class="object-contain h-10 mr-4"
          />
          <span class="font-display font-semibold text-2xl text-primary">
            COMMUN V
          </span>
        </a>
      </div>
      <span class="flex items-center">
        <transition name="fade" mode="out-in">
          <span
            v-if="visible"
            :key="`${visible}-contents`"
            class="text-xs flex items-center"
          >
            <span
              v-for="story in stories[visible]"
              :key="story.uuid"
              class="ml-4"
            >
              {{ story.name }}
            </span>
            <chevrons-left-icon class="p-1 h-6 m-3" />
          </span>
        </transition>
        <span key="titles" class="h-16 flex items-center mr-6">
          <span
            v-for="(folder, name) in stories"
            :key="`${name}-title`"
            class="mr-6 cursor-pointer"
            :class="visible === name ? 'text-accent' : 'text-black'"
            @click="visible = visible === name ? '' : name"
          >
            {{ capitalize(name) }}
          </span>
        </span>
      </span>
    </nav>
  </header>
</template>

<script>
import groupBy from 'lodash/groupBy'
import capitalize from 'lodash/capitalize'
import some from 'lodash/some'

import { ChevronsLeftIcon } from 'vue-feather-icons'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  components: {
    ChevronsLeftIcon
  },
  mixins: [storyblokLivePreview],
  data() {
    return { stories: [], visible: '' }
  },
  mounted() {
    const version =
      process.env.NODE_ENV === 'production' ? 'published' : 'draft'
    // Load the JSON from the API
    this.$storyapi
      .get('cdn/stories', {
        version
      })
      .then((res) => {
        this.stories = groupBy(
          res.data.stories.filter((story) => story.full_slug.includes('/')),
          (story) => story.full_slug.split('/')[0]
        )
      })
      .catch((res) => {
        console.error(res)
      })
  },
  methods: {
    capitalize,
    some
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
