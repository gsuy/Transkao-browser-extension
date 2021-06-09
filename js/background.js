function text(info) {
  const uri = new XMLHttpRequest();
  uri.open("GET", "http://127.0.0.1:80/add_word/" + info.selectionText);
  uri.send();
}

chrome.contextMenus.create({
  title: "import: '%s'",
  contexts: ["selection"],
  onclick: text,
});

chrome.contextMenus.create({
  title: "decode this page",
  onclick: decode,
});

chrome.contextMenus.create({
  title: "encode this page",
  onclick: encode,
});

function encode() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "encode" },
      function (response) {}
    );
  });
}

function decode() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "decode" },
      function (response) {}
    );
  });
}
