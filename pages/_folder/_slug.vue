<template>
  <div>
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    // Check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${context.params.folder}/${context.params.slug}`, {
        version
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  data() {
    return { story: { content: {} } }
  },
  validate(context) {
    // Check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get(`cdn/stories/${context.params.folder}/${context.params.slug}`, {
        version
      })
      .then(() => true)
      .catch(() => false)
  }
}
</script>
