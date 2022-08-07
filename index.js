const express = require('express');
// const mysql = require('mysql');
const bodyParser = require('body-parser');

const peopleRoutes = require('./routes/people');

const app = express();

app.use(bodyParser.json())


app.use('/people', peopleRoutes);

// connect.query('')

app.listen(3000);
