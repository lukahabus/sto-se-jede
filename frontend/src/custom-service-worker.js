/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);