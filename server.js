const path = require('path');
const api = require('./Routes/index.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/index.html'))
});

app.listen(PORT, () => {
    console.log('App listening');
});