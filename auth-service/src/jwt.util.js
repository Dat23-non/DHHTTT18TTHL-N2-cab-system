const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET || 'supersecretkeyforjwt123456789',
    { expiresIn: '1h' }
  );
}

module.exports = { generateToken };