const { v4: uuidv4 } = require('uuid');

module.exports = {
    generateId(id_name){
        return (request, response, next) =>{
            request.body[id_name] = uuidv4();
            next();
        }
    }    
};