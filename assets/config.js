// config.js

const hostname = window.location.hostname;
const protocol = window.location.protocol;

if (hostname === "pureplucks.com" || hostname === "www.pureplucks.com") {
  const originalFetch = window.fetch;

  window.fetch = async function (url, options) {
    if (typeof url === "string" && url.startsWith("http://localhost:5000")) {
      url = url.replace("http://localhost:5000", `${protocol}//${hostname}`);
    }
    return originalFetch(url, options);
  };
}
