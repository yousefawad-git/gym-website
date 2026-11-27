const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Each member owns one route file
app.use('/api/auth', require('./routes/auth'));         // Member 1
app.use('/api/plans', require('./routes/plans'));       // Member 2
app.use('/api/classes', require('./routes/classes'));   // Member 3
app.use('/api/trainers', require('./routes/trainers')); // Member 4
app.use('/api/contact', require('./routes/contact'));   // Member 5

module.exports = app; // needed for tests

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
}
