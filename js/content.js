let DATA = null;
fetch(chrome.extension.getURL("/database/data_encode.json"))
  .then((resp) => resp.json())
  .then(function (arrData) {
    DATA = arrData;
  });

chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === "encode") {
    encodeEntryElement(document.body);
    return true;
  }else if(msg.action === "decode"){
    decodeEntryElement(document.body);
    return true;
  }
});

function encodeEntryElement(obj) {
  if (obj.hasChildNodes()) {
    obj.childNodes.forEach((element) => {
      if (element.nodeType === Text.TEXT_NODE) {
        let text = element.textContent.trim();
        if (text !== "") {
          for (var key in DATA) {
            element.textContent = element.textContent.replace(DATA[key],'[T_T]->'+key);
          }
          element.textContent = element.textContent.replace(',','<[T_T]>');

        }
      } else {
        encodeEntryElement(element);
      }
    });
  }
  return;
}

function decodeEntryElement(obj) {
  if (obj.hasChildNodes()) {
    obj.childNodes.forEach((element) => {
      if (element.nodeType === Text.TEXT_NODE) {
        let text = element.textContent.trim();
        if (text !== "") {
          for (var key in DATA) {
            element.textContent = element.textContent.replace('[T_T]->'+key, DATA[key]);
          }
          element.textContent = element.textContent.replace('<[T_T]>',',');
        }
      } else {
        decodeEntryElement(element);
      }
    });
  }
  return;
}