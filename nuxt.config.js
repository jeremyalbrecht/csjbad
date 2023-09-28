export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "static",
  devServerHandlers: [],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'dayjs-nuxt',
    '@nuxtjs/tailwindcss'
  ],

  dayjs: {
    locales: ['fr'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'fr',
    defaultTimezone: 'Europe/Paris',
  },

  runtimeConfig: {
    public: {
      BACKEND_API_URL: process.env.BACKEND_API_URL,
      BACKEND_URL: process.env.BACKEND_URL
    }
  },
  build: {
  },

})
