const express = require('express');
const routes = express.Router();

routes.get('/test', (request, response) =>{
    try {
        return response.status(200).json({ notification: "Hello world!"});
    } catch (error) {
        console.warn(error);
        return response.status(400).json({ notification: error.message });
    }
});

module.exports = routes;