chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkServer") {
    fetch("http://localhost:5173", { method: "HEAD" })
      .then((res) => {
        sendResponse({ online: res.ok });
      })
      .catch(() => {
        sendResponse({ online: false });
      });
    return true; // Mantém o sendResponse async
  }
});
