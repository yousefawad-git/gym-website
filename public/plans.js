// MEMBER 2
email.value = localStorage.getItem('gymEmail') || '';
async function load() {
  const plans = await (await fetch('/api/plans')).json();
  document.getElementById('plans').innerHTML = plans.map(p =>
    `<div class="card"><h3>${p.name}</h3><p>$${p.price} for ${p.months} month(s)</p>
     <button onclick="subscribe(${p.id})">Subscribe</button></div>`).join('');
}
async function subscribe(planId) {
  const res = await fetch('/api/plans/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.value, planId }) });
  const data = await res.json();
  msg.textContent = data.message || data.error;
}
load();
