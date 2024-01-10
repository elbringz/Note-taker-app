const router = require('express').Router();
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

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            } else {
            JSON.parse(data).push(addNote);

            fs.writeFile('./db/db.json',
            JSON.stringify(JSON.parse(data), null, 4),
            (err) => {
                err ? console.error(err) : console.info('Reviews updated.')
            })
            }
        })
    }
});

module.exports = api;