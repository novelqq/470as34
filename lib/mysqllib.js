const mysql = require('mysql');
const logger = require('morgan');

const mysqlConfig = {
    host: '35.239.21.116',
    user: 'admin',
    password: 'admin474',
    dbidentifier: 'finalfarm2',
}
var pool = mysql.createPool(mysqlConfig);

module.exports.connect = function (cb) {
  return new Promise((resolve, reject) => {
    pool.on('connection', function (connection) {
        connection.query('USE mydb;', function (error, results, fields) {
            if (error) throw error;
        });
        connection.on('error', function (err) {
            logger.error('MySQL error event', err);
        });
        connection.on('close', function (err) {
            logger.warn('MySQL close event', err);
        });
    });
    
    resolve();
  });
}

//taken from some deceprated stackoverflow answer, might need to change to a proper Promise with .catch() method
async function executeQuery (query) {
  return new Promise((resolve, reject) => {
    try{
      pool.query(query, (e, r, f) => {
        if(e){
          reject(e)
        }
        else{
          resolve(r)
        }
      });
    }
    catch(ex){
      reject(ex)
    }
  })  
}

module.exports.executeQuery = executeQuery
