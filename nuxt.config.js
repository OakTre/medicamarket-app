import cleanupIDs from 'svgo/plugins/cleanupIDs'
import removeAttrs from 'svgo/plugins/removeAttrs'
import removeDimensions from 'svgo/plugins/removeDimensions'
import removeViewBox from 'svgo/plugins/removeViewBox'
import inlineStyles from 'svgo/plugins/inlineStyles'
import inlineDefs from '@nuxtjs/svg-sprite/lib/plugins/inlineDefs.js'

function defaultPlugins () {
  removeAttrs.active = true
  removeAttrs.params.attrs = 'svg:id'
  removeAttrs.params.attrs = 'fill'
  removeAttrs.params.attrs = 'stroke'

  removeViewBox.active = false
  removeDimensions.active = true

  inlineStyles.active = true
  inlineStyles.params.onlyMatchedOnce = false

  return [
    removeDimensions,
    cleanupIDs,
    removeAttrs,
    removeViewBox,
    inlineStyles,
    { inlineDefs }
  ]
}

export default {
  head: {
    title: 'Медикамаркет',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Медицинская техника' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'pple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
      { as: 'style', rel: 'stylesheet preload prefetch', href: '/fonts/fonts.css' }
    ]
  },

  css: [
    '@node_modules/reset-css/reset.css',
    '@assets/styles/global'
  ],

  plugins: [
    '~plugins/gl-components',
    '@plugins/mixins/getDynamicFile.js',
    '@plugins/vClickOutSide.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg-sprite'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite'
  ],

  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },

  svgSprite: {
    input: '~/assets/icons/mono/',
    output: '~/assets/icons/gen',
    svgoConfig () {
      return {
        plugins: defaultPlugins()
      }
    }
  },

  axios: {
    baseURL: '/'
  },

  build: {
  }
}
