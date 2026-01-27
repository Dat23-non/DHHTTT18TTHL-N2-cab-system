const express = require('express');
const { login } = require('./auth.service');

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const result = login(username, password);
  if (result) {
    res.json(result);
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

const PORT = process.env.PORT_AUTH || 3001;
app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});