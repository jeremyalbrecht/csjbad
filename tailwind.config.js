  // tailwind.config.js
  module.exports = {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      "./node_modules/flowbite/**/*.js"
    ],
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
    plugins: [
      require('flowbite/plugin')
    ]

  }
