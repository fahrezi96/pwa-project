// INSTALLABE SECTION
// // Install sw
// // this event run once unless the file changed
// self.addEventListener("install", (e) => {
//   console.log("sw has been installed");
// });
// // waiting to activate

// // activate sw
// self.addEventListener("activate", (e) => {
//   console.log("sw has been activated");
// });

// // fetch event
// self.addEventListener("fetch", (e) => {
//   console.log("fetch event", e);
// });

// OFFLINE ACCESS SECTION

const staticCacheName = "site-static-v1";
const assets = [
  "/pwa-project/",
  "/pwa-project/index.html",
  "/pwa-project/assets/js/script.js",
  "/pwa-project/assets/js/ui.js",
  "/pwa-project/assets/js/materialize.min.js",
  "/pwa-project/assets/css/style.css",
  "/pwa-project/assets/css/materialize.min.css",
  "/pwa-project/assets/img/pic.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
];

// Install sw
// this event run once unless the file changed
self.addEventListener("install", (e) => {
  // console.log("sw has been installed");
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});
// waiting to activate

// activate sw
self.addEventListener("activate", (e) => {
  console.log("sw has been activated");
});

// fetch event
self.addEventListener("fetch", (e) => {
  console.log("fetch event", e);
});
