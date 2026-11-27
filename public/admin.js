// MEMBER 5
(async () => {
  const get = async url => (await (await fetch(url)).json());
  const [users, subs, bookings, contact, msgs] = await Promise.all([
    get('/api/auth/count'), get('/api/plans/subscriptions/count'),
    get('/api/classes/bookings/count'), get('/api/contact/stats'), get('/api/contact/messages')
  ]);
  document.getElementById('stats').innerHTML =
    `<div class="card">Registered users: <b>${users.count}</b></div>
     <div class="card">Active subscriptions: <b>${subs.count}</b></div>
     <div class="card">Class bookings: <b>${bookings.count}</b></div>
     <div class="card">Contact messages: <b>${contact.messages}</b></div>`;
  document.getElementById('messages').innerHTML = msgs.map(m =>
    `<div class="card"><b>${m.name}</b> (${m.email})<p>${m.message}</p></div>`).join('') || '<p>No messages yet.</p>';
})();
