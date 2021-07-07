'use strict';

module.exports = (request, response) => {
    response.status(404).json({ error: '404/Not-Found' });
}