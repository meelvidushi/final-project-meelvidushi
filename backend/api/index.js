require('dotenv').config();  // Load environment variables from .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('../routes/auth');  
const expenseRoutes = require('../routes/expenses');  

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas using the environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas', error);
});

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api/expenses', expenseRoutes); 

app.get('/', (req, res) => {
  res.send("backend running")
})

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
