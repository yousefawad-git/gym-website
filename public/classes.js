// MEMBER 3
email.value = localStorage.getItem('gymEmail') || '';
async function load() {
  const list = await (await fetch('/api/classes')).json();
  document.getElementById('classes').innerHTML = list.map(c =>
    `<div class="card"><h3>${c.name}</h3><p>${c.time} - ${c.spotsLeft} of ${c.capacity} spots left</p>
     <button onclick="book(${c.id})">Book</button></div>`).join('');
}
async function book(classId) {
  const res = await fetch('/api/classes/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.value, classId }) });
  const data = await res.json();
  msg.textContent = data.message || data.error;
  load();
}
load();
