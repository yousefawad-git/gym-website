// MEMBER 5
sendBtn.onclick = async () => {
  const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name.value, email: email.value, message: message.value }) });
  const data = await res.json();
  msg.textContent = data.message || data.error;
};
