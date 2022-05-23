export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Купи бойові машини для ЗСУ!',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/normalize',
    '~/assets/sass/styles',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/notifications.js',
  ],

  components: {
    dirs: [
      '~/components',
      '~/components/partials',
      '~/components/main',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          name: 'English',
          code: 'uk',
          iso: 'uk-UA',
          file: 'uk-UA.js'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'uk',
    }]
  ],

  styleResources: {
      sass: [
        '~/assets/sass/variables.sass',
      ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    sass: [
      '~/assets/sass/variables.sass',
    ]
  },

  loading: {
    name: 'pulse',
    color: '#1b60a5',
    background: 'white'
  }
}
