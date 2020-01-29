import StoryblokClient from 'storyblok-js-client'

const API_KEY = process.env.API_KEY || 'mSgFN890vPtSUJZcDrwq5Att'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'COMMUN V',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/nak6nmr.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/components', '~/plugins/vue'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  generate: {
    routes() {
      const Storyblok = new StoryblokClient({
        accessToken: API_KEY
      })
      const version = process.env.API_KEY ? 'draft' : 'published'
      return Storyblok.get('cdn/stories', {
        version
      }).then((response) => {
        return response.data.stories.map((story) => `/${story.full_slug}`)
      })
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: API_KEY,
        cacheProvider: 'memory'
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
