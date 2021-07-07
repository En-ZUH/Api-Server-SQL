'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server');
const pool = require('./src/models/pool');

pool.connect().then(() => {
    server.startServer(process.env.PORT || 4000);

}).catch(error => {
    console.log('Error:', error.message);
});

