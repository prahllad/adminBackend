'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config({silent: true});
const config = require('./../configs');
//const cors = require('cors
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
require('./../configs/db')(app, config);
require('./routes')(app);
module.exports = app;