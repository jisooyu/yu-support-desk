const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

// connect MongoDB
connectDB();

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Service Support Desk' });
});

app.use(express.json());
// x-www-form-urlencoded를 사용하면 다음이 필요
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(PORT, () => console.log(`The Server is running at ${PORT}`));
