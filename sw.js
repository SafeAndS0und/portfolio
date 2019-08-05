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
    "url": "/portfolio/_nuxt/107ae45d4edb82853ded.js",
    "revision": "b78168930d11db9655701c0b0b95b0df"
  },
  {
    "url": "/portfolio/_nuxt/8ed47d3b52cce53b252a.js",
    "revision": "1c8d24fb32cd49ca5a76cf424df7894b"
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
