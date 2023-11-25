"use strict";
/**
 * @type {HTMLFormElement}
 **/
/**
 * @type {HTMLInputElement}
 */
const address = atob(location.hash.slice(1, location.hash.length));
/**
 * @type {HTMLInputElement}
 */
const searchEngine = "https://www.google.com";
/**
 * @type {HTMLParagraphElement}
 */
/**
 * @type {HTMLPreElement}
 */

window.addEventListener("load", async () => {

  try {
    await registerSW();
  } catch (err) {
    alert("Failed to register service worker.");
     alert(err.toString());
    throw err;
  }

  const url = search(address, searchEngine);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
