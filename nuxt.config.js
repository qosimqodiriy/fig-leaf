// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,

  
  css: [
    '@/assets/css/main.css',
  ],
  
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  compilerOptions: {
    paths: {
      "~/*": ["./*"],
      "@/*": ["./*"]
    },
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
