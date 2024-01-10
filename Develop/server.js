const path = require('path');
const api = require('./Routes/index.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.use(express.static('public'));