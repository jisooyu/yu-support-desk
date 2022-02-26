const asyncHandler = require('express-async-handler');

// @description: Register a new user
// @route: /api/users
// @access: publie
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }
  res.status(200).json({ name, email, password });
});

// @description: Login a user
// @route: /api/users/login
// @access: public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login user');
});

module.exports = {
  registerUser,
  loginUser,
};
