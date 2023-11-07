"use strict";
/**
 * @type {HTMLFormElement}
 **/
/**
 * @type {HTMLInputElement}
 */
const address = "win11.blueedge.me";
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
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address, searchEngine);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
