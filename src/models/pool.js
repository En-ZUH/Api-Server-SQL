'use strict';
require('dotenv').config();
const pg = require('pg');

pg.defaults.ssl = process.env.NODE_ENV === 'production' && { rejectUnauthorized: false };

module.exports = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});