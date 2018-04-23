const express = require('express');
const bodyParser = require('body-parser');

const recordRouter = require('./routes/record.route')

const app = express();
const PORT = process.env.PORT || 5000;
// these always need to be at the top

app.use(express.static('server/public'));
// always need static here
app.use(bodyParser.urlencoded({extended: true }));
// need this line of code in order to post

// routes (get, post, put, delete requests)

app.use('/record', recordRouter);

app.listen(PORT, () => {
    console.log(`Up and Running on port ${PORT}`);
});

