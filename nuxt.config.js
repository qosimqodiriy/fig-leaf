// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,

  head() {
    return {
      title: "Figleaf Index page", // Set the title of the page
      meta: [
        { property: "og:title", content: "Open Graph Title" }, // Add Open Graph title meta tag
      ],
      link: [
        // { rel: "canonical", href: "https://example.com/about" }, // Add canonical link tag
      ],
    };
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
