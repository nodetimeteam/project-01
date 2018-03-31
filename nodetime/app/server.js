const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongo = require('./mongodb');
const routes = require('./routes');

dotenv.config();

const port = 5000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(routes)

mongo.connect(process.env.MONGODB_URL)
    .then(() => app.listen(port))
    .then(() => console.log(`Magic happens on port: ${port}`))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })