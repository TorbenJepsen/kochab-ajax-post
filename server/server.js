const express = require('express');
const app = express();
const PORT = 5000;
// these always need to be at the top

const recordCollection = require('./modules/record-collection.js')
// this will live in the database shortlw=y

app.use(express.static('server/public'));
// always need static here

// routes (get, post, put delete requests)

app.get('/records', (req, res) => {
    res.send(recordCollection);
});

app.listen(PORT, () => {
    console.log(`Up and Running on port ${PORT}`);
});

