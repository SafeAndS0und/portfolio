importScripts('/portfolio/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/portfolio/_nuxt/3a661e99c36b091b03c7.js",
    "revision": "d8a68345c866ca824746822c8dc05852"
  },
  {
    "url": "/portfolio/_nuxt/41a281e250edd4194302.js",
    "revision": "c0a225b9d91cc18d9fefd4fced87b4cc"
  },
  {
    "url": "/portfolio/_nuxt/4b332a2050ba96a34c1c.js",
    "revision": "823eb1ed80285b5e1668d8dfea0425ba"
  },
  {
    "url": "/portfolio/_nuxt/8d713e5fec370546a069.js",
    "revision": "7c0ba53e500f7ee370ec9c40f3678da6"
  },
  {
    "url": "/portfolio/_nuxt/ae47e0cb0a3ece82e61b.js",
    "revision": "61d076d610435fdf9c70279d7ceef73c"
  },
  {
    "url": "/portfolio/_nuxt/f0266ed2a0fba660f3e4.js",
    "revision": "0941013b045e318410e81b42676e5ccb"
  }
], {
  "cacheId": "portfolio",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/portfolio/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/portfolio/.*'), workbox.strategies.networkFirst({}), 'GET')
