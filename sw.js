importScripts('/portfolio/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/portfolio/_nuxt/0b38330dc83cf7e5ae02.js",
    "revision": "ce7341000dbfe4a7db6766cda7bfa1ad"
  },
  {
    "url": "/portfolio/_nuxt/0ceb99c8aba00d16b054.js",
    "revision": "93d3557fc2ee62623e09ad98c3f9a8bd"
  },
  {
    "url": "/portfolio/_nuxt/0dfaf18f5870c08b5135.js",
    "revision": "e0d28da3dbea581406727e7d8acc29be"
  },
  {
    "url": "/portfolio/_nuxt/5f6b8fc7541ff16f5ca9.js",
    "revision": "c28756cc100ff59a2c53c58f32fefee7"
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
