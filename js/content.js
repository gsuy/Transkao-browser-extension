let DATA = null;
fetch(chrome.extension.getURL("/database/data.json"))
  .then((resp) => resp.json())
  .then(function (jsonData) {
    DATA = jsonData;
  });

chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === "transkao") {
    entryElement(document.body);
    return true;
  }
});

function entryElement(obj) {
  if (obj.hasChildNodes()) {
    obj.childNodes.forEach((element) => {
      if (element.nodeType === Text.TEXT_NODE) {
        let text = element.textContent.trim();
        if (text !== "") {
          for (var key in DATA) {
            element.textContent = element.textContent.replace(key, DATA[key]);
          }
        }
      } else {
        entryElement(element);
      }
    });
  }
  return;
}
