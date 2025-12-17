import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(express.json()); // Parse JSON bodies

// Sample data store (in production, use a database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

let posts = [
  { id: 1, title: 'React Basics', content: 'Learning React fundamentals', userId: 1 },
  { id: 2, title: 'State Management', content: 'Understanding useState and useReducer', userId: 1 }
];

// ========== USER ROUTES ==========
// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET single user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST create user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  
  users.splice(index, 1);
  res.json({ message: 'User deleted' });
});

// ========== POST ROUTES ==========
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

app.post('/api/posts', (req, res) => {
  const { title, content, userId } = req.body;
  const newPost = { id: posts.length + 1, title, content, userId };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// ========== AUTH ROUTES (Mock) ==========
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Mock authentication
  if (email && password) {
    res.json({ token: 'mock-jwt-token', user: { id: 1, email } });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/api/auth/me', (req, res) => {
  // Mock protected route
  const token = req.headers.authorization;
  if (token) {
    res.json({ user: { id: 1, email: 'user@example.com' } });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// ========== ERROR HANDLING ==========
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

