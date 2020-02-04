<template>
  <header>
    <nav class="flex flex-wrap items-center justify-between p-6">
      <div class="flex items-center flex-shrink-0 text-white lg:ml-6">
        <a href="/" class="flex pr-6 items-center">
          <img
            src="https://a.storyblok.com/f/74011/x/c1708a23c5/commun_icon_red.svg"
            class="object-contain h-10 mr-4"
            alt="COMMUN Logo"
          />
          <span class="font-display font-semibold text-2xl text-primary">
            COMMUN V
          </span>
        </a>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded"
          @click="collapsed = !collapsed"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto font-sans"
        :class="collapsed ? 'hidden' : 'block'"
      >
        <div class="lg:h-16 lg:flex lg:items-center">
          <span
            v-for="(folder, name) in stories"
            :key="`${name}-title`"
            class="block mt-4 lg:inline lg:mt-0 lg:ml-6 lg:cursor-pointer"
            :class="visible === name ? 'lg:text-accent' : 'text-black'"
            @click="visible = visible === name ? '' : name"
          >
            {{ capitalize(name) }}
            <span class="text-xs lg:hidden flex flex-wrap items-center">
              <nuxt-link
                v-for="story in stories[name]"
                :key="story.uuid"
                class="mr-4"
                :to="`/${story.full_slug}`"
                @click.native="collapsed = true"
              >
                {{ story.name }}
              </nuxt-link>
            </span>
          </span>
        </div>
        <transition name="fade" mode="out-in">
          <span
            v-if="visible"
            :key="`${visible}-contents`"
            class="text-xs hidden lg:flex items-center"
          >
            <chevrons-right-icon class="hidden lg:inline h-4 mx-3" />
            <nuxt-link
              v-for="story in stories[visible]"
              :key="story.uuid"
              class="mr-4"
              :to="`/${story.full_slug}`"
              @click.native="visible = ''"
            >
              {{ story.name }}
            </nuxt-link>
          </span>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
import groupBy from 'lodash/groupBy'
import capitalize from 'lodash/capitalize'
import some from 'lodash/some'

import { ChevronsRightIcon } from 'vue-feather-icons'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  components: {
    ChevronsRightIcon
  },
  mixins: [storyblokLivePreview],
  data() {
    return { stories: [], visible: '', collapsed: true }
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
