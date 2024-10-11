import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors'; 
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// In-memory users array (use a database in production)
const users = [];

app.get('/',(req, res) => {
    res.render('server.ejs');
});

// Sign Up Endpoint
app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, age, gender, phoneNumber } = req.body;

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user to "database"
  users.push({ firstName, lastName, email, password: hashedPassword, age, gender, phoneNumber });
  console.log(users);

  res.status(201).json({ message: 'User registered!' });
});

// Sign In Endpoint
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  
  // Find user
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Sign in successful', user: { email: user.email, firstName: user.firstName } });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
