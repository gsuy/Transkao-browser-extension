chrome.contextMenus.create({
  title: "Translate this page",
  onclick: open,
});

function open() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "transkao" },
      function (response) {}
    );
  });
}