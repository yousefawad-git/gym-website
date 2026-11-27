// MEMBER 4
(async () => {
  const list = await (await fetch('/api/trainers')).json();
  document.getElementById('trainers').innerHTML = list.map(t =>
    `<div class="card"><h3>${t.name}</h3><p>${t.speciality}</p></div>`).join('');
})();
bmiBtn.onclick = async () => {
  const res = await fetch('/api/trainers/bmi', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ weightKg: weight.value, heightCm: height.value }) });
  const data = await res.json();
  msg.textContent = data.error || `BMI ${data.bmi} (${data.category})`;
};
