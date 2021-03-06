const pkg = require('./package')


module.exports = {
   mode: 'spa',
   router: {
      base: '/portfolio/'
   },

   /*
   ** Headers of the page
   */
   head: {
      title: pkg.name,
      meta: [
         {charset: 'utf-8'},
         {name: 'viewport', content: 'width=device-width, initial-scale=1'},
         {hid: 'description', name: 'description', content: pkg.description}
      ],
      link: [
         {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
   },

   manifest: {
      theme_color: '#19191A'
   },

   /*
   ** Customize the progress-bar color
   */
   loading: {color: '#fff'},

   /*
   ** Global CSS
   */
   css: [],

   /*
   ** Plugins to load before mounting the App
   */
   plugins: [
      { src: '~plugins/vue-awesome', ssr: false },
   ],

   /*
   ** Nuxt.js modules
   */
   modules: [,
      '@nuxtjs/pwa'
   ],

   /*
   ** Build configuration
   */
   build: {
      extend(config, ctx){

      }
   }
}
