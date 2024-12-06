var browser = browser || chrome;

browser.runtime.onMessage.addListener(function () {
  console.log("Hello from the background");
});
