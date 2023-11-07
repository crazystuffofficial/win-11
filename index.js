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
    alert("Failed to register service worker.");
     alert(err.toString());
    throw err;
  }

  const url = search(address, searchEngine);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
