// MEMBER 1
async function send(path) {
  const body = { name: name.value, email: email.value, password: password.value };
  const res = await fetch('/api/auth/' + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const data = await res.json();
  msg.textContent = data.message || data.error;
  if (res.ok) localStorage.setItem('gymEmail', body.email);
}
registerBtn.onclick = () => send('register');
loginBtn.onclick = () => send('login');
