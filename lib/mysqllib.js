const mysql = require('mysql');
const logger = require('morgan');

const mysqlConfig = {
    host: 'asn3-4-db',
    user: 'TESTUSER',
    password: 'redridinghood',
}

//connect and executequery referenced from https://stackoverflow.com/a/55429346
var pool = mysql.createPool(mysqlConfig);

module.exports.connect = function (cb) {
  return new Promise((resolve, reject) => {
    pool.on('connection', function (connection) {
        connection.query('USE as34;', function (error, results, fields) {
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
