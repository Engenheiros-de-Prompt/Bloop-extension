document.getElementById('openApp').addEventListener('click', async () => {
  try {
    const res = await fetch('http://localhost:3000', { method: 'HEAD' });
    if (res.ok) {
      chrome.tabs.create({ url: 'http://localhost:3000' });
    } else {
      alert('Servidor local não está respondendo.');
    }
  } catch (error) {
    alert('Não foi possível conectar ao servidor local.');
  }
});
