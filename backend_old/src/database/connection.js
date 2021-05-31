const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
console.log("🚀 ~ file: connection.js ~ line 3 ~ configuration", configuration);

const connection = require('knex')(configuration);
module.exports = connection;