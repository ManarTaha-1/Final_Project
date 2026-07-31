require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); 
const postRoutes = require('./routes/postRoutes');

const app = express();

connectDB();

app.use(express.json());

// Routes
app.use('/api/users', userRoutes); 
app.use('/api/posts',postRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Server is running 🚀' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});