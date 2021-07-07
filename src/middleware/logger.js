'use strict';

module.exports = (request, response, next) => {
    console.log('path:', request.path, 'method:', request.method);
    next();
};