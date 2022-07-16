// check is sw supported or not in user browser
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/pwa-project/sw.js")
    .then((reg) => console.log("sw registered", reg))
    .catch((err) => console.log("sw NOT registered", err));
}
