const { generateToken } = require('./jwt.util');

// Dữ liệu người dùng giả cho MVP (không dùng database thật)
const users = [
  { id: 1, username: 'user1', password: '123456', role: 'user' },
  { id: 2, username: 'driver1', password: '123456', role: 'driver' }
];

function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return null;
  const token = generateToken(user);
  return { token, user: { id: user.id, username: user.username, role: user.role } };
}

module.exports = { login };