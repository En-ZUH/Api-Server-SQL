'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



const PORT = process.env.PORT || 4500;

// Error handlers
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

// the routes: 
const foodRoute = require('./routes/food');
const clothesRoute = require('./routes/clothes');

// middleware
const logger = require('./middleware/logger');
app.use(logger);




let home = (request, response) => {
    response.send('Welcome to home page 4');
}

let startServer = (PORT) => {
    app.listen(PORT, () => {
        console.log(`server is listening to port ${PORT}`);
    });
};

app.get('/', home);

app.use('/api/v1/food', foodRoute);
app.use('/api/v1/clothes', clothesRoute);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    startServer: startServer,
};
