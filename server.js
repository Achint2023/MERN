const express = require('express'); 
const app = express();

const connectDb = require('./config/db');

// Connecting to DB
connectDb();

app.get('/', (req,res) => res.send('API Running'));

// Defining Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server started on port ${PORT}');
});