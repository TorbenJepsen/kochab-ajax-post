const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// these always need to be at the top

const recordCollection = require('./modules/record-collection.js')
// this will live in the database shortly

app.use(express.static('server/public'));
// always need static here
app.use(bodyParser.urlencoded({extended: true }));
// need this line of code in order to post

// routes (get, post, put delete requests)

app.get('/records', (req, res) => {
    res.send(recordCollection);
});

app.post('/add-record', (req, res) => {
    console.log(req.body);
    recordCollection.push(req.body);
    res.sendStatus(200);
});

// req.body on the server = data on our clientside aka newSong

app.listen(PORT, () => {
    console.log(`Up and Running on port ${PORT}`);
});

