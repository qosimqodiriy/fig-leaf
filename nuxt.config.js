// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,

  head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  
  css: [
    '@/assets/css/main.css',
  ],
  
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  plugins: [],

  compilerOptions: {
    paths: {
      "~/*": ["./*"],
      "@/*": ["./*"]
    },
  },

  axios: {
    baseURL: 'https://mediasaboq.uz/api/v1',
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://mediasaboq.uz/api/v1'
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
})
