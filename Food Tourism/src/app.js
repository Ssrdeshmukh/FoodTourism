const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/classes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'classes.html'));
});

app.get('/experiences', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'experiences.html'));
});

app.get('/festival', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'festival.html'));
});

app.get('/tours', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tours.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});