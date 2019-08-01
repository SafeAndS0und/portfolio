importScripts('/portfolio/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/portfolio/_nuxt/0ceb99c8aba00d16b054.js",
    "revision": "93d3557fc2ee62623e09ad98c3f9a8bd"
  },
  {
    "url": "/portfolio/_nuxt/0dfaf18f5870c08b5135.js",
    "revision": "e0d28da3dbea581406727e7d8acc29be"
  },
  {
    "url": "/portfolio/_nuxt/3f7c8cb3dab332f1e2c6.js",
    "revision": "333cbd9726a4009d81378915e373a401"
  },
  {
    "url": "/portfolio/_nuxt/72d09f9fe0fad315db6d.js",
    "revision": "db8e00ca8139c799f00e7b0fe87f0d67"
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
