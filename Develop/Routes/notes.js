const router = require('express').Router();
const { response } = require('express');
const fs = require('fs');
const uuid = require('uuid');

router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.json(JSON.parse(data));
        }
    })
})