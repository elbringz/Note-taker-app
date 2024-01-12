const api = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');

api.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const notes = JSON.parse(data)
            res.json(notes);
        }
    })
})

api.post('/', (req, res) => {
    const{title, text} = req.body;

    if(req.body) {
        const addNote = {title, text, id: uuid.v4(),};

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            } else {
                const notes = JSON.parse(data)
            notes.push(addNote);

            fs.writeFile('./db/db.json',
            JSON.stringify(notes, 4),
            (err) => {
                err ? console.error(err) : console.info('Reviews updated.')
            })
            }
        })
    }
});

module.exports = api;