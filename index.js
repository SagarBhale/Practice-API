const express = require('express');
const app = express();

// Import user data
const users = require('./data/users');

//
app.get("/", (req, res) => {
  res.send("Chal rha he");
});
// GET API endpoint for all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET API endpoint for a single user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
