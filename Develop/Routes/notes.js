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

router.post('/', (req, res) => {
    const{title, text} = req.body;

    if(req.body) {
        const addNote = {title, text, id: uuid.v4()};
    }
})

fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        JSON.parse(data).push(addNote);
    }
})