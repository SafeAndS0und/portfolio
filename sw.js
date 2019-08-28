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
    "url": "/portfolio/_nuxt/62499696a0050b0918c6.js",
    "revision": "1339e8a3d9b5bf4c250c5f6f0b32e2f0"
  },
  {
    "url": "/portfolio/_nuxt/85b55238bee156bca1d4.js",
    "revision": "575211e826cd46894677c5b51215be30"
  },
  {
    "url": "/portfolio/_nuxt/ae47e0cb0a3ece82e61b.js",
    "revision": "61d076d610435fdf9c70279d7ceef73c"
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
