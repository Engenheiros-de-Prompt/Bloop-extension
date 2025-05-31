document.getElementById("openApp").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "checkServer" }, (response) => {
    if (response && response.online) {
      chrome.tabs.create({ url: "http://localhost:5173" });
    } else {
      alert("Servidor local não está respondendo.");
    }
  });
});
