const express = require('express');
const router = express.Router();
const recordCollection = require('../modules/record-collection.js')

router.get('/', (req, res) => {
    res.send(recordCollection);
});

router.post('/', (req, res) => {
    console.log(req.body);
    recordCollection.push(req.body);
    res.sendStatus(201);
});

module.exports = router;