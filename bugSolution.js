const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // ... (database query or other operations using userId) ...
    // Example: Simulate database query
    const user = users.find(user => user.id === parseInt(userId));
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.send({ userId });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});
const users = [{id: 1, name: 'test'}];
app.listen(3000, () => console.log('Server listening on port 3000'));