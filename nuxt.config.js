export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "static",
  devServerHandlers: [],
  // Global page headers: https://go.nuxtjs.dev/config-head
  meta: {
    title: 'CSJBAD Augny Badminton - Club et école de badminton à côté de Metz licencié FFBad',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Découvrez le club de badminton d\'Augny près de Metz. Adhérez à notre club affilié à la Fédération Française de Badminton et vivez la passion du badminton avec nous !'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

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
