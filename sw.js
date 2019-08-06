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
    "url": "/portfolio/_nuxt/9d44d686321d9e963784.js",
    "revision": "9396190dda51741aec6303d3557bd0d2"
  },
  {
    "url": "/portfolio/_nuxt/ae47e0cb0a3ece82e61b.js",
    "revision": "61d076d610435fdf9c70279d7ceef73c"
  },
  {
    "url": "/portfolio/_nuxt/fd7c55544852cbcfad0f.js",
    "revision": "b90c8ac007985908a8fefd3ba46d6a38"
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
