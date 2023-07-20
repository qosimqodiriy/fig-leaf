// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,

  
  css: [
    '@/assets/css/main.css',
  ],
  
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  plugins: [
    // '~/plugins/getAPI.js',
  ],

  compilerOptions: {
    paths: {
      "~/*": ["./*"],
      "@/*": ["./*"]
    },
  },

  axios: {
    baseURL: 'https://mediasaboq.uz/api/v1',
    // baseURL: 'http://207.154.207.34:8083/api/v1/',
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
