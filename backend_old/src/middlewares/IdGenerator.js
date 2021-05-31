const { v4: uuidv4 } = require('uuid');

module.exports = {
    async generateId (request, response, next) {
        request.body.id = uuidv4();
        next();
    }
}