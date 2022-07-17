// Install sw
// this event run once unless the file changed
self.addEventListener("install", (e) => {
  console.log("sw has been installed");
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
