const express = require('express');
const connectDb = require('./config/db');

const app = express();

// Connect Database
connectDb();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/',  (req, res) => res.send({ msg: 'Welcome to the creds-keeper API...' }));

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/creds', require('./routes/creds'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
